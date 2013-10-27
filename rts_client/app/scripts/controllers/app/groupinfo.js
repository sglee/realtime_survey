 /* 
 * groupInfo controller 
 * 그룹관리 컨트롤러
 * History
 * v1.0 - 최초 작성, sglee(2013/10/26)
 */
'use strict';

angular.module('rtsClientApp')
  .controller('AppGroupInfoCtrl', function ($location, $scope, $state, $http, AppCodeManagerCtrl, groupInfoFactory) {

    //$scope.groupinfo = {};
    //debugger;

    //--------------------------
    // Update Group Information
    //--------------------------
    /*
    $scope.update = function() {
      $scope.groupinfo.is_use = "Y";
      var dataParam = { code: $scope.groupinfo.code,
                        name: $scope.groupinfo.name,
                        is_use: $scope.groupinfo.is_use
                      };
      
      $http({
        url: '/api/managers/:code',
        method: 'POST',
        data: { groupinfo: dataParam }
      }).success(function(data) {
         $scope.groupinfo = data || {};
      }).error(function(reason) {
        alert('fail');
        // Store the errors to format on screen
        $scope.groupinfo.errors = reason;
      });
    };
    */


  });
