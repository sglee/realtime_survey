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
	.controller('AppSurveyQuestionCtrl', function($scope, $state, $location, UserService, socket){

	$scope.directives = "준비된 설문내용이 없습니다.";
	$scope.questions = {};	// 지시문에 해당하는 질의 선택글들

    $scope.selectionItem = {}; // 운영자가 다음 진행을 위해서 선택된 지시문 정보를 임시 보관함.
    $scope.voteRate = 0; 
    $scope.totalUser = 0; 

    var paperInfo = { paper_id: $scope.$stateParams.id,
                      name : UserService.getLoginInfo(),
    				  seq:0 }; 
    // 설문번호에 해당하는 지시문 정보를 요청한다. 
    socket.emit('req:adduser', paperInfo); 
    socket.emit('req:paperInfo', paperInfo); 
    socket.on('res:paperInfo', function(data){
        if(data == null || data[0] == null) return 
        $scope.directives = data[0].directive_content || {};
        $scope.questions = data; 
    });

    socket.on('currentPaperRoom', function(data){

        $scope.totalUser = data.total || 0;
    });

    //---------------------------------
    // Send Qestion number
    //--------------------------------
    $scope.sendQuestion = function(data){

        $scope.selectionItem = data; 
        // 선택지 정보를 보내고 다음 문제를 로드한다. 
        // 선택정보 테이블에 기록을 한다. 
        socket.emit('req:selectedQuestion', {
            paper_id: data.paper_id,
            question_no: data.question_no,
            directive_no: data.directive_no,
            custom_id: UserService.getLoginInfo(),
            seq: -1
        }); 
    };

	$scope.next = function(){

        var data = $scope.selectionItem;
        if(data == null) return;
        // 선택지 정보를 보내고 다음 문제를 로드한다. 
        // 선택정보 테이블에 기록을 한다. 
        socket.emit('req:selectedQuestion', {
            paper_id: data.paper_id,
            question_no: data.question_no,
            directive_no: data.directive_no + 1,
            custom_id: UserService.getLoginInfo(),
            seq: -1
        }); 
        //$scope.sendQuestion($scope.selectionItem);
	    //$state.go('app.rtsquestion');
	};
});