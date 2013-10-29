/* 
 * paper controller
 *
 *  설문지등록 및 속성을 관리하는 컨트롤
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
.controller('AppSurveyPaperCtrl', function($scope, $location, UserService, groupInfoFactory){
        
       //$('.ui.selection.dropdown.paper')
       // .dropdown();

        //if(typeof $scope.authUserId === 'undefined' || $scope.author == null)
        //	$location.path("/");
        if(UserService.getLoginInfo() == null) return $location.path("/");
/*
        $scope.$on("event:notifyGroup", function(event, data){
        	$scope.errorGroup = data.message;
        });

        $scope.$on("event:notifyPaperType", function(event, data){
        	$scope.errorPaperType = data.message;
        });
*/
});