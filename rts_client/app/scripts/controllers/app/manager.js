'use strict';

angular.module('rtsClientApp')
  .controller('AppManagerCtrl', function ($location, $scope, $state, $http, UserService, managerFactory, managerBasicFactory) {
    $scope.manager = {};
    $scope.manager.user_id = UserService.getLoginInfo();

    $scope.surveyNavi = function(){
      $state.go('app.paper');
    };
    //--------------------------
    // 운영자 등록 
    //--------------------------
  	$scope.signup = function() {
      $scope.manager.auth_code = "L001"; //운영자 권한 코드 
      $scope.manager.is_use = "Y";
     // managerFactory.update({manager: $scope.manager});
      $http({
        url: '/api/managers',
        method: 'POST',
        data: { manager: $scope.manager }
      }).success(function(data, status, header, config) {
        $state.go('app.paper');
      }).error(function(reason) {
      	alert('fail');
        // Store the errors to format on screen
        $scope.manager.errors = reason;
      });
    };
    //--------------------------
    // 운영자 삭제
    // issue: 데이터베이스에서 삭제되었으나 콜백함수에서 data는 자료가 남아있음. 
    //--------------------------
    $scope.remove = function () {
      var dataParms = { user_id: $scope.manager.user_id };
      managerFactory.remove(dataParms, function (data) {
          $scope.manager = {};
        }, function (error) {
            console.log(error)
        });            
    };
    //--------------------------
    // 운영자 수정
    //--------------------------
    $scope.update = function() {
      $scope.manager.auth_code = "L001"; //운영자 권한 코드 
    
      var dataParms = { user_id: $scope.manager.user_id, 
                        password: $scope.manager.password,
                        name: $scope.manager.name,
                        hp: $scope.manager.hp,
                        email: $scope.manager.email,
                        is_use: $scope.manager.is_use };

      managerFactory.update(dataParms, function (data) {
          if(data.user_id == null )
            $scope.manager.user_id = userId;
          else{
            $scope.manager = data || {};
          }
        }, function (error) {
            console.log(error)
        });      
    };    
    //------------------------------
    // 등록된 운영자ID 조회 
    //------------------------------
    $scope.getManager = function($scope){
      $scope.manager = {};
      var userId = UserService.getLoginInfo($scope);

      if(userId == null) return null; 

    	managerBasicFactory.get({user_id: userId }, function (data) {
          if(data.user_id == null )
            $scope.manager.user_id = userId;
          else{
            $scope.manager = data || {};   
          }
        }, function (error) {
            console.log(error)
      });
    };

    $scope.getManager($scope);
  });
