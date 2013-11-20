/*
 * 기술검토가 필요한 사항 : 1. Async Module 관련 자료 검토 
 *                    2. 특정 Chanel관리 
 *                    3. Redis관련 자료 
 */
/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var group = require('./routes/group/group');
var user = require('./routes/user');
var paperHistory = require('./routes/paperhistory');
var questionItem = require('./routes/questionItem');
var questionAnswer = require('./routes/questionAnswer');
var http = require('http');
var path = require('path');
var socketio = require('socket.io');

var app = express();

app.configure(function(){
	// all environments
	app.set('port', process.env.PORT || 3001);
    app.set('redisPort', 3002);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));

});

app.configure('development', function(){
	// development only
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
	//res.sendfile(__dirname + '/index.html');
	res.end();
});

var port = 3002; 
//redis settings
/*
var redis = require('socket.io/node_modules/redis');
var pub = redis.createClient(app.get('redisPort'), "url");
var sub = redis.createClient(app.get('redisPort'), "url");
var store = redis.createClient(app.get('redisPort'), "url");
pub.auth('pass', function(){console.log("pub...")});
sub.auth('pass', function(){console.log("sub")});
store.auth('pass', function(){console.log("store...")});
*/
var server = http.createServer(app);
var io = socketio.listen(server);
io.configure(function(){
    // send minified client
    io.enable('browser client minification'); 
    // apply etag caching logic based on version number
    io.enable('browser client etag');
    // gzip the file
    io.enable('browser client gzip');
    // reduce logging
    io.set('log level', 1);
    // enable all transports (optional if you want flashsocket)
    io.set('transports', [
        'websocket',
        'flashsocket',
        'htmlfile',
        'xhr-polling',
        'jsonp-polling'
    ]);
    //var RedisStore = require('socket.io/lib/stores/redis');
    //io.set('store', new RedisStore({redisPub:pub, redisSub:sub, redisClient:store}));
});

server.listen(app.get('port'), function(){
	console.log("rts node server listening on port " + app.get('port'));
});

//-------------------------------------------------
// Channel Control
//-------------------------------------------------
/*
try
{
    //var sio = require('socket.io');
    //var io = sio.listen(8080).set('log level', 2);
    var pres = io.of("/notify").on('connection', function (socket) {

        // Clients need to send a "user" message to identify themselves...
        socket.once("user", function(userData)
        {
            try
            {
                // Make sure we have the data we need...
                if (userData == null || (userData.Id || null) == null) {
                    return;
                }

                // Join the user to their own private channel so we can send them notifications...
                socket.join(userData.Id);
            } catch (e) { console.log(e); }
         });

        // We can now "push" information to the user from any process that can connect to this service...
        socket.on("push", function(data)
        {
            try 
            {
                // Make sure we have the data we need...
                if (data == null || (data.Id || null) == null) {
                    return;
                }
                console.log(data);

                // Let's clean up the data a little (we don't need to tell the user who they are)
                var channel = data.Id;
                delete data.Id;

                // Now we will braodcast the data only to the user's private channel...
                socket.broadcast.to(channel, data).emit("update", data)
            } catch (e) { console.log(e); }
        });
    });							
} catch (e)
{
    console.log(e);
}
*/
try
{
    // paper rooms are consisted of paper_id.
    var paperRooms = [];
    var usernames = [];

	io.sockets.on('connection', function(socket){
     
        // when the client emits 'adduser', this listens and executes
        socket.on('req:adduser', function(userData){
            // store the username in the socket session for this client
            socket.userid = userData.id;
            socket.username = userData.name;
            // store the paper room name in the socket session for this client
            socket.room = userData.paper_id;
            if(socket.count == null) socket.count = 0;
            socket.count = socket.count + 1; 
            console.log('socket count -->' + socket.count );

            // add the client's username to the global list
            usernames[socket.username] = userData.name;
            console.log('usernames length' + usernames.length);
            // send client to paper_id room
            socket.join(userData.paper_id);
            paperRooms.push(userData.paper_id);
            // echo to client they've connected
            socket.emit('updateUser', 'SERVER', 'you have connected to Paper ' + userData.paper_id );
            // echo to room 1 that a person has connected to their room
            socket.broadcast.to(socket.room).emit('accessPaperRoom', 'SERVER', userData.name + ' has connected to this room');
            // socket.broadcast.to(socket.room).emit('currentPaperRoom', 'SERVER', {total: usernames.length});
            
            io.sockets.in(socket.room).emit('currentPaperRoom',  {total: socket.count});
            socket.emit('updatePaper', paperRooms, userData.paper_id);
        });

        // when the client emits 'sendchat', this listens and executes
        socket.on('sendchat', function (data) {
            // we tell the client to execute 'updatechat' with 2 parameters
            io.sockets.in(socket.room).emit('updatechat', socket.username, data);
        });

        socket.on('switchRoom', function(newroom){
            // leave the current room (stored in session)
            socket.leave(socket.room);
            // join new room, received as function parameter
            socket.join(newroom);
            socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
            // sent message to OLD room
            socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
            // update socket session room title
            socket.room = newroom;
            socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' has joined this room');
            socket.emit('updaterooms', paperRooms, newroom);
        });

        // when the user disconnects.. perform this
        socket.on('disconnect', function(){
            // remove the username from global usernames list
            delete usernames[socket.username];
            socket.count--;
            // update list of users in chat, client-side
            io.sockets.emit('updateusers', usernames);
            // echo globally that this client has left
            socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
            socket.broadcast.to(socket.room).emit('leave', {msg: socket.username + 'has leaved'});
            socket.leave(socket.room);
        });

		socket.on('send:cPaperHistory', function(data){

		});

		socket.on('send:cJoin', function(data){
			console.log('joined...');
			paperHistory.load(data, socket);
		});

		socket.on('loadGroup', function(groupData){
			group.load(groupData, io.sockets);
		});
		socket.on('loadHistory', function(paperHistory){
			paperHistory.load(paperhistory, io.sockets)
		});
        // 1. 다음설문을 불러온다. 
        socket.on('req:paperInfo', function(data){
            questionItem.load(data, socket);
        });
        // 1. 비회원인 경우 설문을 조회한다.
        socket.on('req:paperInfoByPaperId', function(data){
            paperHistory.loadByPaper(data, socket);
        });
        // 1. 사용자의 선택지 정보를 저장하고 다음 문항을 불러온다. 
        // 2. 선택지를 저장하고 모든 사용자들에게 실시간 응답을 보내준다. 
        socket.on('req:selectedQuestion', function(data){
            questionAnswer.save(data, socket);
            data.seq = -1; 
            questionItem.load(data, socket, io.sockets);
        });
		socket.on('evt:join', function(user){
			// 설문 참여자 정보 관리
		});
		socket.on('evt:selected', function(survey){
			// 설문 선택지 정보 
		});
		socket.on('evt:next', function(survey){
			// 운영자의 다음 설문 진행
		});
		socket.on('evt:close', function(survey){
			// 설문 종료
		});
		socket.on('evt:chatroom', function(chatroom){
			// 채팅
		});
		socket.on('disconnect', function(){
		/*
		socket.broadcast.emit('user:left', {
			name: name
		});
		*/
		});	
	});

} catch (e)
{
    console.log(e);
}



