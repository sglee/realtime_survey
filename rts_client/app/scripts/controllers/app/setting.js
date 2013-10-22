/* 
 * setting controller
 *
 * 설문app의 전체 설정관리하는 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
  .controller('AppSettingCtrl', function ($location, $scope, $state, $http) {
        if(typeof $scope.authUserId === 'undefined' || $scope.author == null)
        	return $location.path("/");
  });
