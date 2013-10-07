'use strict';

angular.module('rtsClientApp', ['ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // default route
    $urlRouterProvider.otherwise("/");

    // welcome/join route
    $stateProvider
      .state('default', {
        templateUrl: '/views/layout/default.html',
        controller: 'DefaultCtrl',
        abstract: true,
        onEnter: function() {
          setBodyClass("default-layout");
        }
      })
        .state('default.welcome', {
          url: '/',
          templateUrl: '/views/welcome.html',
          controller: 'WelcomeCtrl'
        })
        .state('default.join', {
          url: '/join',
          templateUrl: '/views/join.html',
          controller: 'JoinCtrl'
        });

    // main app route
    $stateProvider
      .state('app', {
        templateUrl: '/views/layout/app.html',
        controller: 'AppCtrl',
        abstract: true,
        onEnter: function() {
          setBodyClass("app-layout");
        }
      })
        .state('app.my', {
          url: '/app',
          templateUrl: '/views/app/Survey.html',
          controller: 'AppSurveyCtrl',
          abstract: true
        })

        .state('app.community', {
          url: '/app/communities',
          templateUrl: '/views/app/Survey.html',
          controller: 'AppSurveyCtrl',
          abstract: true
        })
 
          .state('app.community.report', {
            url: '/:community_id/report',
            templateUrl: '/views/app/Survey/report.html',
            controller: 'AppSurveyReportCtrl'
          })
          /*
          .state('app.community.member', {
            url: '/:community_id/members',
            templateUrl: '/views/app/Survey/member.html',
            controller: 'AppSurveyMemberCtrl'
          })
          .state('app.community.setting', {
            url: '/:community_id/setting',
            templateUrl: '/views/app/Survey/setting.html',
            controller: 'AppSurveySettingCtrl'
          })
          .state('app.community.Survey', {
            url: '/:community_id',
            templateUrl: '/views/app/Survey/detail.html',
            controller: 'AppSurveyDetailCtrl'
          })
*/
        .state('app.notification', {
          url: '/app/notifications',
          templateUrl: '/views/app/notification.html',
          controller: 'AppNotificationCtrl'
        })
        .state('app.setting', {
          url: '/app/setting',
          templateUrl: '/views/app/setting.html',
          controller: 'AppSettingCtrl'
        });
    
    $locationProvider.html5Mode(true).hashPrefix('!');

    // layout마다 {name}-layout class를 body에 넣어줌
    function setBodyClass(className) {
      var body = $("body");
      var classes = body.attr("class").split(" ");
      angular.forEach(classes, function(value){
        if(value.indexOf("-layout") > 0) {
          body.removeClass(value);
        }
      });
      body.addClass(className);
    }
  });
