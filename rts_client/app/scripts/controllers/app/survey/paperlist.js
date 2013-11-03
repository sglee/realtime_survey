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

		socket.on('connected', function(data){
			//$scope.messages.push( JSON.parse(data.msg));
		});

		socket.emit('send:paperinfo', {paperid: '3333', directive_no: '333'});

		socket.on('send:group', function(data){
			alert('rec:' + data[0].user_id);
		});

		socket.on('send:changePaper', function(data){
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


		// private helpers
		//=================

		// Methods published  to the scope
		//=================================
		$scope.sendMessage = function(){
			socket.emit('send:paperinfo', {
				message: $scope.paperinfo
			});

			$scope.paperinfo.push({
				userid: UserService.getLoginInfo(),
				text: $scope.users.message,
				paperid: "4349",
				directive_no: "1"

			});

			$scope.message = '';
		};
/*
		$scope.paperlist = {
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
*/
		$scope.back = function (){
			$location.path("/");
		}

		$scope.next = function(){
			$scope.paperlist = {};
			socket.emit('send:paperinfo', {paperid: '3333', directive_no: '333'});
			socket.emit('loadGroup',{user_id:'lover@daum.net'});
		}

	});