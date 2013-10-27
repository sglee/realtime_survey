/* 
 * setting controller
 *
 * 설문지를 구성하기 위한 기본 설정, 관리코드등을 담당하는 컨트롤
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
	.controller('AppSurveySettinghCtrl', function($scope){
        if(typeof $scope.authUserId === 'undefined' || $scope.author == null)
        	return $location.path("/");

        
	});