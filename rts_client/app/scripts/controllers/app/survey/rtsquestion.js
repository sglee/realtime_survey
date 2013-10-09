/* 
 * rtsqeustion controller
 *
 * 실시간으로 참여자 응답 관리하는 컨트롤러 
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
	.controller('AppSurveyRtsQuestionCtrl', function($scope, $state){
			$scope.item = {count: 23, total: 130,title: '본 세미나는 유익했습니까? 본 세미나는 유익했습니까 본 세미나는 유익했습니까 본 세미나는 유익했습니까 본 세미나는 유익했습니까 본 세미나는 유익했습니까'};
	
	});