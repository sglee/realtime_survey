'use strict';

angular.module('rtsClientApp')
  .controller('AppManagerCtrl', function ($location, $scope, $state, $http,  managerFactory) {

  	$scope.signup = function() {
      $http({
        url: '/api/managers',
        method: 'POST',
        data: { manager: $scope.manager }
      }).success(function(data) {
        $state.go('app.paper');
      }).error(function(reason) {
      	alert('fail');
        // Store the errors to format on screen
        $scope.manager.errors = reason;
      });
    };

    // Rails server & mongodb Test 
    // get 또는 query로 특정 조회조건으로 가져오지 못함. 래
    // managerFactory.query 전체조회 가능
    // managerFactory.post 생성 가능
    // managerFactory.get({p:p}) or  managerFactory.query({p:p}) 동작
    //---------------------------------------------------------------
    // Rails 소스 : managers_controller.rb 참고 
    //---------------------------------------------------------------
    // 테스트 목적 : 로그인후 운영자인 경우 운영자등록 페이지 방문시 운영자 정보를 자동으로 
    //            조회하여 필드에 보여줄려고 함. 
    //--------------------------------------------------------------- 
    // managerFactory.update({p:p}) or remove 동작 오류 
    /* 아 서버로그 참고하세요. 
    Started GET "/api/managers/james555" for 127.0.0.1 at 2013-10-25 12:19:50 +0900
    Processing by ManagersController#show as JSON
      Parameters: {"user_id"=>"james555"}
    Completed 500 Internal Server Error in 1ms

    Mongoid::Errors::InvalidFind (
    Problem:
      Calling Document.find with nil is invalid.
    Summary:
      Document.find expects the parameters to be 1 or more ids, and will return a single document if 1 id is provided, otherwise an array of documents if multiple ids are provided.
    Resolution:
      Most likely this is caused by passing parameters directly through to the find, and the parameter either is not present or the key from which it is accessed is incorrect.):
      app/controllers/managers_controller.rb:93:in `set_manager'


  Rendered vendor/bundle/gems/actionpack-4.0.0/lib/action_dispatch/middleware/templates/rescues/_source.erb (2.6ms)
  Rendered vendor/bundle/gems/actionpack-4.0.0/lib/action_dispatch/middleware/templates/rescues/_trace.erb (1.6ms)
  Rendered vendor/bundle/gems/actionpack-4.0.0/lib/action_dispatch/middleware/templates/rescues/_request_and_response.erb (1.5ms)
  Rendered vendor/bundle/gems/actionpack-4.0.0/lib/action_dispatch/middleware/templates/rescues/diagnostics.erb within rescues/layout (31.7ms)
    */
    $scope.getManager = function(){
      $scope.manager = {};
    	$scope.manager = managerFactory.query({user_id: 'james555'}, function (data) {
        console.log(data);
        alert(JSON.stringify(data));
          // test 
          $scope.manager.user_id = data.user_id;
          $scope.manager.email = data.email; 
           //$scope.manager.name = data.name;
           //$scope.manager.password = data.password;
        
      });
    
    	//$scope.manager = Manager.query({user_id: 'red'});

/*
      $http({
        url: '/api/managers/:user_id',
        method: 'GET',
        params : { user_id: 'red' }
      }).success(function(data) {
        $scope.manager = data;
      }).error(function(reason) {
      	alert('fail');
        // Store the errors to format on screen
        $scope.manager.errors = reason;
      });
  */
	/*
  
      $http({
        url: '/api/managers',
        method: 'GET',
        data: { manager: {user_id: 'red'} }
      }).success(function(data) {
        $scope.manager = data;
      }).error(function(reason) {
      	alert('fail');
        // Store the errors to format on screen
        $scope.manager.errors = reason;
      });
	*/

    };


  });
