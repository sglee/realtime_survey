'use strict';

angular.module('rtsClientApp')
  .controller('AppManagerCtrl', function ($location, $scope, $state, $http, managerFactory) {

  	$scope.signup = function() {
      $http({
        url: '/api/managers',
        method: 'POST',
        data: { manager: $scope.manager }
      }).success(function(data) {
        $state.go('app.paper');
      }).error(function(reason) {
      	alert('fail');
        // Store the errors to format on screen
        $scope.manager.errors = reason;
      });
    };

    $scope.getManager = function(){
    	$scope.manager = managerFactory.query({id: 'red'});
    	return $scope.manager; 
    }


  });
