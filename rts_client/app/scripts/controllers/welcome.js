/* 
 * welcome controller
 *
 * welcome(첫화면) 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, subicura(2013/10/06)
 */
'use strict';

angular.module('rtsClientApp')
  .controller('WelcomeCtrl', function ($scope, $state) {
    $scope.loginWithFacebook = function() {
      $state.go('app.my.survey');
    }

    $scope.loginWithTwitter = function() {
      $state.go('app.my.survey');
    }

    $scope.loginWithEmail = function() {
      $state.go('app.my.survey');
    }

     $scope.login = function() {
      $state.go('app.my.survey');
    }

     $scope.sign = function() {
      $state.go('app.my.survey');
    }
  });
