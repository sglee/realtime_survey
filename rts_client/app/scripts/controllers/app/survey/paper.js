/* 
 * paper controller
 *
 *  설문지등록 및 속성을 관리하는 컨트롤
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
.controller('AppSurveyPaperCtrl', function($scope, $location, $state, $http, UserService, PaperService, 
    groupInfoFactory, paperTypeFactory, paperFactory, paperDirectFactory, questionItemsFactory){

    if(UserService.getLoginInfo() == null) return $location.path("/");  
    //if(typeof $scope.authUserId === 'undefined' || $scope.author == null)
    //  $location.path("/");
    //$location,$rootScope, $scope, $state, $http,

    $scope.$on("event:notifyGroup", function(event, data){
          //$scope.errorGroup = data.message;
    });

    $scope.$on("event:notifyPaperType", function(event, data){
          //$scope.errorPaperType = data.message;
          // 두번 호출되는 현상 
          //$scope.addPapers();
    });

    $scope.papers = {}; // 설문객체
    $scope.directives = {} // 서버에서 얻어온  지시문정보
    $scope.papersDirect = {} // UI 설정정보  
    $scope.myPaperId = "";
    $scope.questionTitle = ""; // 질의문
    $scope.questionItems = {}; // 질의문에 대한 선택지문 
    $scope.selectedPaperDirectives = null; // 선택된 지시문

    //--------------------------
    // 선택된 그룹정보
    //--------------------------
    $scope.changedGroup = function(){
      $scope.papers.groupCode = $scope.papers.selGroup.code;
      $scope.papers.groupName = $scope.papers.selGroup.name;
      $scope.grpName = $scope.papers.groupName;
    };

    //--------------------------
    // 선택된 설문정보
    //--------------------------
    $scope.changedPaperType = function(){
      $scope.selTypeCode = $scope.papers.selPaperType.paper_type_code;
      $scope.selTypeName = $scope.papers.selPaperType.name;
      $scope.ptypeName = $scope.papers.groupName;
    };

    //--------------------------
    // 선택된 지시문 정보 
    //--------------------------
    $scope.changedDirectiveType = function(){
      debugger;
      $scope.selDirectiveNo = $scope.papersDirect.selDirectiveType.directive_no;
      $scope.selDirectiveContent = $scope.papersDirect.selDirectiveType.content;
    };
    //--------------------------
    // 설문지 정보
    //--------------------------
    $scope.getPapersParams = function () {
       return { paper_id : $scope.papers.paper_id,
                paper_type_code : $scope.selTypeCode,
                group_code : $scope.papers.groupCode,
                limit_time : $scope.papers.limit_time,
                user_id : UserService.getLoginInfo(),
                question_type : $scope.papers.questionType,
                is_automatic : "N", 
                in_use : "Y"
       };
    };      
    //--------------------------
    // 설문등록
    //--------------------------
    $scope.addPapers = function() {
        $scope.papers.is_use = "Y";
         // managerFactory.update({manager: $scope.manager});
        $http({
            url: '/api/papers',
            method: 'POST',
            data: { paper:  $scope.getPapersParams() }
          }).success(function(data, status, header, config) {
            debugger;
            //$scope.papers = data || {};
            $scope.myPaperId = data.paper_id;
          }).error(function(reason) {
            alert('fail');
          });
    };
    //------------------------------
    // 설문지 조회
    //------------------------------
    $scope.getPapers = function(){
      //$scope.papers = {};
      var userId = UserService.getLoginInfo($scope);
      alert($scope.papers.paper_id);
      if(userId == null) return null; 
      paperFactory.get({paper_id: $scope.papers.paper_id }, 
        function (data) {
          $scope.papers = data || {};   
        }, function (error) {
          alert(error);
      });
    };   
    //--------------------------
    // 지시문정보 
    // paper_id, :directive_no, :content, :q_type
    //--------------------------
    $scope.getDirectivesParams = function () {
       return { paper_id : $scope.myPaperId ,
                directive_no : $scope.papersDirect.directive_no,
                content : $scope.papersDirect.contents,
                q_type : $scope.papersDirect.questionType
       };
    };       

    //------------------------------
    // 지시문 등록 
    // 설문번호와 지시문 조건으로 한번 더 조회
    //
    //------------------------------
    $scope.addDirective = function() {
        $http({
            url: '/api/directives',
            method: 'POST',
            data: { directive:  $scope.getDirectivesParams() }
          }).success(function(data, status, header, config) {
            debugger;
            $scope.papersDirect = $scope.getDirectives(data);
          }).error(function(reason) {
            alert('fail');
          });
    };

    //------------------------------
    // 지시문 조회
    //------------------------------
    $scope.getDirectives = function(pdata){
      debugger;
      var userId = UserService.getLoginInfo($scope);
      if(userId == null) return null; 

      paperDirectFactory.query( 
        function (data) {
          return $scope.papersDirect = data || {};   
        }, function (error) {
          alert(error);
      });
    };   

    $scope.updateDirective = function() {

    };
    $scope.deleteDirective = function() {

    };

    //------------------------------
    // 질문등록관련 데이터변수 
    // 설문번호와 지시문 조건으로 한번 더 조회
    // :question_no, :paper_id, :directive_no, : directive_content, :question, :img_url
    //------------------------------
    $scope.getQItemParams = function (argument) {
     alert($scope.selDirectiveContent);
      return {  question_no : $scope.questionItems.question_no,
                paper_id : $scope.myPaperId,
                directive_no : $scope.selDirectiveNo,
                directive_content: $scope.selDirectiveContent,
                question : $scope.questionItems.questionTitle,
                img_url : ""
              };
    };
    
    $scope.addQuestionItem = function() {
        $http({
            url: '/api/question_items',
            method: 'POST',
            data: { question_item:  $scope.getQItemParams() }
          }).success(function(data, status, header, config) {
              // 현재 등록된 정보를 얻어
              questionItemsFactory.query({directive_no:Number($scope.selDirectiveNo)},
              function(data){
                return $scope.questionItems = data || {};
            })
          }).error(function(reason) {
            alert('fail:' + reason);
          });
    };

    /*
  field :user_id, type: String
  field :paper_id, type: Integer
  field :start_date, type: Date
  field :status, type: String

  field :goupinfo_code, type: String
  field :groupinfo_name, type: String
  field :paper_type_code, type: String
  field :paper_type_name, type: String

  survey status 
  001 : 시작 
  002 : 대기 
  003 : 종료
  004 : 취소

    */
    var paperStatus = { start: 'start',
                        wait: 'wait',
                        finished: 'finished',
                        cancel: 'cancel'
                      };

    $scope.historyParams = function() {

      return { user_id: UserService.getLoginInfo(),
        paper_id: $scope.myPaperId,
        status: paperStatus.start,
        groupinfo_code: $scope.papers.groupCode,
        groupinfo_name: $scope.papers.groupName,
        paper_type_code: $scope.selTypeCode,
        paper_type_name: $scope.selTypeName
      };
    };
    $scope.savePaperHistory = function(){
        $http({
            url: '/api/paper_histories',
            method: 'POST',
            data: { paper_history:  $scope.historyParams() }
          }).success(function(data, status, header, config) {
            console.log(data);
          }).error(function(reason) {
            alert('fail:' + reason);
          });
    };
    // 설문리스트 페이지로 이동하기 
    $scope.goQuestionList = function(){
     
      $scope.savePaperHistory();
      $state.go('app.paperlist');
    };

});