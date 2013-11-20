 /* 
 * join controller
 *
 * 회원가입 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
  .controller('JoinCtrl', function ($location, $scope, $state, $http, UserService) {

    // Signup action
    $scope.signup = function() {
      $http({
        url: '/api/users',
        method: 'POST',
        data: { user: $scope.user }
      }).success(function(data) {
        // If the request is successful, and the user
        // has been created: store the auth_token,
        // broadcast the 'authenticated' event across
        // our app, and redirect to '/'
        UserService.set( data.auth_token );
        $scope.$broadcast('event:authenticated');
        $location.path('/');
      }).error(function(reason) {
      	alert('fail');
        // Store the errors to format on screen
        $scope.user.errors = reason;
      });
    };

    // logOut
    $scope.logout = function() {
    	// Post to our api sign_in route
      $http({
        url: '/api/users/sign_out',
        method: 'DELETE',
        data: {auth_token: UserService.get()}
      }).success(function(result) {
        $scope.authUserId = null;
        $location.path('/');
      }).error(function(result){
        $scope.ngModel = data;
        $scope.user.errors = data.info;
     });
  };

    // 1. login type: member login, manager login 
    $scope.login = function() {
      // Post to our api sign_in route
      $http({
        url: '/api/users/sign_in',
        method: 'POST',
        data: { user: $scope.user }
      }).success(function(data) {
        if (data.success) {
          // If we get back an authenticated user (indicated by
          // the success in the response, not if the response 
          // returns 401 - so we can capture the user errors
          $scope.ngModel = data.data.data;
          UserService.set(data.data.auth_token);
          
          $scope.manager = {};
          $scope.manager.user_id = $scope.user.email;
          $scope.authUserId = $scope.user.email; 
          UserService.setLoginInfo($scope, $scope.manager.user_id);

          $state.go('app.paperlist');

        } else {
          $scope.authUserId = null;
          $scope.ngModel = data;
          $scope.user.errors = data.info;
        }
      });
    };

    // no member access 
    $scope.access = function(){
      $state.go('default.nojoin');
    };

  });
