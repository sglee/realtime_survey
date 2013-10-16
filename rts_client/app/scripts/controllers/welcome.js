/* 
 * welcome controller
 *
 * welcome(첫화면) 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
  .controller('WelcomeCtrl', function ($scope, $state) {
    $scope.loginWithFacebook = function(){
      console.log("1");
      $state.go('app.my.survey');
    }
    $scope.loginWithTwitter = function(){
      console.log("2");
      $state.go('app.my.survey');
    }
    $scope.loginWithEmail = function(){
      console.log("3");
      $state.go('app.my.survey');
    }
    $scope.login = function(){
      debugger;
      console.log("4"); 
      $state.go('app.paperlist');
    }
    $scope.access = function(){
      console.log("5");
      $state.go('default.nojoin');
    }
    $scope.sign = function(){
      console.log("7");
      $state.go('app.my.survey');
    }
  });
