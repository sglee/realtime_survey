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
    $scope.user = {};
    $scope.user.email = "lover@daum.net";
    $scope.user.password = "sglee0415";
    
  });
