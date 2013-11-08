
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

var server = http.createServer(app);
var io = socketio.listen(server);

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
//-----------------개선 사항 -----------------------// 
try
{
	io.sockets.on('connection', function(socket){
		// Clients need to send a "user" message to identify themselves...
        socket.once("user", function(userData)
        {
            try
            {
            	console.log('R: UserData');
                // Make sure we have the data we need...
                if (userData == null || (userData.Id || null) == null) {
                    return;
                }

                console.log('R: UserData Join');
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
        socket.on('req:paperInfo', function(data){
            questionItem.load(data, socket);
        });
        // 1. 사용자의 선택지 정보를 저장하고 다음 문항을 불러온다. 
        // 2. 선택지를 저장하고 모든 사용자들에게 실시간 응답을 보내준다. 
        socket.on('req:selectedQuestion', function(data){
            questionAnswer.save(data, socket);
            //questionItem.load(data, socket);
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



