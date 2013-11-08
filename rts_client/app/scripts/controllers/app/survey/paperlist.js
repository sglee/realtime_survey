/* 
 * question controller
 *
 * 설문지를 구성하는 질의내용을 관리하는 컨트롤러 
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
	.controller('AppSurveyPaperlistCtrl', function($scope, $state, $location, 
			UserService, socket){

		$scope.groupinfo = {};
		$scope.paperlist = {};
		$scope.users = {};
		$scope.users.message = "Test Survey socket";
		$scope.groupName = "RTS 설문 리스트";
		$scope.title =  '현재 참여할 수 있는 설문정보입니다. 시작버튼을 선택하면 설문에 참여하실 수 있습니다.';

	try{
        
   /*
        socket.on("connect", function(){
        	alert("connect");
        	console.log("connected");
        	socket.emit("user", {Id:101});
        });

        socket.on("update", function(data){
        	alert("update");
        	console.log(data);
        });

		socket.once('connect', function(){
			alert("once connect");
			console.log("connnected");
			
			setTimeout(function(){
				socket.emit("push", {Id: 101, Counts: { NewMessages: 3} });
				setTimeout(function(){
					socket.emit("push", {Id:102, Counts: { NewMessages: 5}});

				}, 2000);
			}, 4000);
		});
*/
		socket.on('connect', function(){
			console.log('connect');
			socket.emit('user', {Id: UserService.getLoginInfo()});
		});

		socket.emit('send:cJoin', {user_id:UserService.getLoginInfo()});

		socket.on('send:group', function(data){
			$scope.groupinfo = data;
		});

		socket.on('send:sPaperHistory', function(data) {
			$scope.paperlist = data;
		});

		socket.on('send:message', function(message){
			$scope.messages.push(message);
		});
		socket.on('user:join', function(data){
			// Facebook user picture or empty user image. 
			$scope.messages.push({
				user: '설문조사',
				text: 'User ' + data.name + ' has joined.'
			});
			$scope.users.push(data.name);
		});

		// add a message when a user disconnects or leaves the room
		socket.on('user:left', function(data){
			$scope.messages.push({
				user: '설문조사',
				text: 'User ' + data.name + ' has left.'
			});

			var i, user;
			for(i=0, len  = $scope.users.length; i < lne; i++){
				user = $scope.users[i];
				if(user === data.name){
					$scope.users.splice(i,1);
					break;
				}
			}
		});

	}catch(e){console.log(e);}
		// private helpers
		//=================

		// Methods published  to the scope
		//================================

		$scope.back = function (){
			$location.path("/");
		}

		$scope.next = function(){
			$scope.paperlist = {};
			//socket.emit('loadGroup',{user_id:'lover@daum.net'});
		}

	});