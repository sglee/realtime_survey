 /* 
 * 모듈명: rtsClientApp
 *
 * rts 라우터 정보를 관리하는 모
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp', ['ngResource', 'ui.router', 'rails', 'ui.select2'])
  .config(function ($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
     
     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

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
      .state('default.nojoin', {
        url: '/nojoin',
        templateUrl: '/views/nojoin.html',
        controller: 'NoJoinCtrl'
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
      .state('app.rts', {
        url: '/app',
        templateUrl: '/views/app/survey.html',
        controller: 'AppSurveyCtrl',
        //abstract: true
      })
      .state('app.paper', {
          url: '/paper',
          templateUrl: '/views/app/survey/paper.html',
          controller: 'AppSurveyPaperCtrl'
      })
      .state('app.question', {
        url: '/question',
        templateUrl: '/views/app/survey/question.html',
        controller: 'AppSurveyQuestionCtrl'
      })
      .state('app.rtsquestion', {
        url: '/rtsquestion',
        templateUrl: '/views/app/survey/rtsquestion.html',
        controller: 'AppSurveyRtsQuestionCtrl'
      })
      .state('app.paperlist', {
        url: '/paperlist',
        templateUrl: '/views/app/survey/paperlist.html',
        controller: 'AppSurveyPaperlistCtrl'
      })
      .state('app.survey', {
        url: '/survey',
        templateUrl: '/views/app/survey.html',
        controller: 'AppSurveyCtrl',
        abstract: true
      })
      .state('app.survey.report', {
        url: '/:survey_id/report',
        templateUrl: '/views/app/survey/report.html',
        controller: 'AppSurveyReportCtrl'
      })
      .state('app.survey.member', {
        url: '/:survey_id/members',
        templateUrl: '/views/app/survey/member.html',
        controller: 'AppSurveyMemberCtrl'
      })
      .state('app.survey.setting', {
        url: '/:survey_id/setting',
        templateUrl: '/views/app/survey/setting.html',
        controller: 'AppSurveySettingCtrl'
      })
      .state('app.notification', {
        url: '/app/notifications',
        templateUrl: '/views/app/notification.html',
        controller: 'AppNotificationCtrl'
      })
      .state('app.manager', {
        url: '/manager',
        templateUrl: '/views/app/manager.html',
        controller: 'AppManagerCtrl',
        abstract: true
      })      
      .state('app.manager.setting', {
        url: '/:manger_id/setting',
        //url: '/setting',
        templateUrl: '/views/app/manager/setting.html',
        controller: 'AppManagerSettingCtrl'
      })
      .state('app.setting', {
        url: '/app/setting',
        templateUrl: '/views/app/setting.html',
        controller: 'AppSettingCtrl'
      });
    

    //$locationProvider.html5Mode(true).hashPrefix('!');

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
