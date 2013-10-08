/* 
 * app controller
 *
 * /app/* 의 최상위 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
 'use strict';

angular.module('rtsClientApp')
  .controller('AppCtrl', function ($scope, $location) {
    $scope.logout = function() {
      $location.path("/");
    }
  });
