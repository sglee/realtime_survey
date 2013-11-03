
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var group = require('./routes/group/group');
var user = require('./routes/user');
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
	res.sendfile(__dirname + '/index.html');
});

var server = http.createServer(app);
var io = socketio.listen(server);

server.listen(app.get('port'), function(){
	console.log("rts node server listening on port " + app.get('port'));
});

io.sockets.on('connection', function(socket){
	socket.emit('connected', {msg: 'ready survery!!!'});
	socket.on('send:paperinfo', function(data){
		console.log(data.paperid);
		console.log(data.directive_no);
        // test data 
		var paperList = {
			groupName: '2013 설문 리스트 현황',
			title: '현재 참여할 수 있는 설문정보입니다. 시작버튼을 선택하면 설문에 참여하실 수 있습니다.',
			items: [
					{title: '우분투 2013 세미나', status: 'Join', num: 2345, color: 'red'},
					{title: 'angularJS 2013 세미나', status: 'Waiting', num: 8900, color: 'blue'},
					{title: 'Microsoft 2013 세미나', status: 'Done', num: 3455, color: 'gray'},
					{title: 'Oracle 2013 세미나', status: 'Done', num: 2340, color: 'gray'},
					{title: 'Mysql 2013 세미나', status: 'Waiting', num: 9382, color: 'blue'},
					{title: 'MongoDB 2013 세미나', status: 'Join', num: 7677, color: 'red'}
				]
			};         

        io.sockets.emit('send:changePaper', paperList);

	});

	socket.on('loadGroup', function(groupData){
		group.load(groupData, io.sockets);
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



