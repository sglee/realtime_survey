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
  	//alert('user->' + $scope.user.email + "pwd: ->" + $scope.user.password);
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
        alert('success');
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
       alert('auth_token:' + UserService.get());
    	// Post to our api sign_in route
      $http({
        url: '/api/users/sign_out',
        method: 'POST',
        data: {auth_token: UserService.get()}

      }).success(function(data) {
        if (data.success) {

          $location.path('/');
          //$state.go('app.paperlist');
        } else {
          alert('logout failed');
          //$scope.ngModel = data;
          //$scope.user.errors = data.info;


        }
     });
  };

    // login action
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
          alert('success');
          //$location.path('/');
          $state.go('app.paperlist');
        } else {
          $scope.ngModel = data;
          $scope.user.errors = data.info;
          
        }
      });
    };

  });
