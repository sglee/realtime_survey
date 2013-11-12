 /* 
 * nojoin controller
 *
 * 비회원접속 관리 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
  .controller('NoJoinCtrl', function ($scope, $state, $location){

  	$scope.paper_num  = '0000';

  	$scope.cancelAccess = function (){		
      $location.path("/");
    };

    $scope.tryAccess = function (){
debugger;
      var paper_num = $scope.paper_num;
      var loginId = $scope.loginId;
      var data = {id: $scope.paper_num, loginId: $scope.loginId};
      $state.go('app.paperlist(data)');

    };
    
  });