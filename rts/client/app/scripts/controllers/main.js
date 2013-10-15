'use strict';

angular.module('rtsngApp')
  // Main controller with the latest articles
  // This will never be routed to unless we have an authenticated user
  .controller('MainCtrl', function ($rootScope, $scope, $http) {
    $scope.currentUser = {};
    //$scope.articles = ArticleService.getLatestFeed();
  });
