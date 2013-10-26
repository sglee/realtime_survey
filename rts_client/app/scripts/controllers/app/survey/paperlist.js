/* 
 * question controller
 *
 * 설문지를 구성하는 질의내용을 관리하는 컨트롤러 
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
	.controller('AppSurveyPaperlistCtrl', function($scope, $state, $location, UserService){
		$scope.paperlist = {};

		$scope.paperlist = {
			groupName: '2013 설문 리스트 현황',
			title: '현재 참여할 수 있는 설문정보입니다. 시작버튼을 선택하면 설문에 참여하실 수 있습니다.',
			items: [
					{title: '우분투 2013 세미나', status: 'Join', num: 2345, color: 'red'},
					{title: 'angularJS 2013 세미나', status: 'Waiting', num: 8900, color: 'blue'},
					{title: 'Microsoft 2013 세미나', status: 'Done', num: 3455, color: 'gray'},
					{title: 'Oracle 2013 세미나', status: 'Done', num: 2340, color: 'gray'},
					{title: 'Mysql 2013 세미나', status: 'Waiting', num: 9382, color: 'blue'},
					{title: 'MongoDB 2013 세미나', status: 'Join', num: 7677, color: 'red'}
				]
			}; 

		$scope.back = function (){
			$location.path("/");
		}

	});