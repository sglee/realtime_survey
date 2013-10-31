 /* 
 * PaperService
 *
 * Survey paper information management
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/30)
 */
'use strict';

angular.module('rtsClientApp')
.service('paperInfo', function () {
   // implement
})
.factory('PaperService', function($http, $q) {
  var paperNo = null, // paper number
      user_id = null;
    
  var paperNumHandlers = {
    // store our token for later retrieval
    set: function(v) { paperNo = v; },
    get: function() {
      if (!paperNo) {
        console.log('boardCast');
        $rootScope.$broadcast('event:emptypapernumber');
      }
      else {
        return paperNo;
      }
    }
/*
    setPaperInfo: function ($scope, userId) {
      user_id = userId;
    },
    getLoginInfo: function ($scope) {
      return user_id;
    }
*/
  };

  return paperNumHandlers;
});