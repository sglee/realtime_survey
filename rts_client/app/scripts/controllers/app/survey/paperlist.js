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


    try {
		$scope.param_paper_id = $scope.$stateParams.id || -1;
		$scope.param_loginId = $scope.$stateParams.loginId || {};

	}catch (ex){
		alert(ex);
	}


	$scope.groupinfo = {};
	$scope.paperlist = {};
	$scope.users = {};
	$scope.users.message = "Test Survey socket";
	$scope.groupName = "RTS 설문 리스트";
	$scope.title =  '현재 참여할 수 있는 설문정보입니다. 시작버튼을 선택하면 설문에 참여하실 수 있습니다.';

	try{

		socket.on('connect', function(){
			console.log('connect');
			socket.emit('user', {Id: UserService.getLoginInfo()});
		});

		debugger;
		if(UserService.getLoginInfo() != null && $scope.param_paper_id == -1) // 정회원인 경우 Id로 정보 로딩 
			socket.emit('send:cJoin', {user_id:UserService.getLoginInfo()});
		else{	// 비회원인 경우 설문번호에 의해 정보 로딩
			alert($scope.param_paper_id);
			socket.emit('req:paperInfoByPaperId', {paper_id: $scope.param_paper_id});
		}

		socket.on('send:group', function(data){
			$scope.groupinfo = data;
		});

		socket.on('send:sPaperHistory', function(data) {
			$scope.paperlist = data;
		});

		socket.on('send:message', function(message){
			$scope.messages.push(message);
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