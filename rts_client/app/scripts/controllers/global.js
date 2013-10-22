/* 
 * global controller
 *
 * 최상위 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
  .controller('GlobalCtrl', function ($scope, $location, $state, Manager) {
    $scope.$state = $state;
    $scope.$location = $location;
  });
