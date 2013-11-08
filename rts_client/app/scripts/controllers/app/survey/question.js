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

        var paperInfo = { paper_id: $scope.$stateParams.id,
        				  seq:0 }; 
        // 설문번호에 해당하는 지시문 정보를 요청한다. 
        socket.emit('req:paperInfo', paperInfo); 
        socket.on('res:paperInfo', function(data){
            if(data == null) return 
            $scope.directives = data[0].directive_content || {};
            $scope.questions = data; 
        });

        //---------------------------------
        // Send Qestion number
        //--------------------------------
        $scope.sendQuestion = function(data){
            // 선택지 정보를 보내고 다음 문제를 로드한다. 
           // 선택정보 테이블에 기록을 한다. 
           socket.emit('req:selPaperInfo', {
                        paper_id: data.paper_id,
                        question_no: data.question_no,
                        directive_no: data.directive_no,
                        custom_id: data.user_id
                }); 
        };

	$scope.next = function(){
	    $state.go('app.rtsquestion');
	};
});