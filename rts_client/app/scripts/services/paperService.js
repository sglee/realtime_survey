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
  var paperInfo = {};

  var paperProperties = {
    set: function(v) { paperInfo = v;},
    get: function(){
      return paperInfo; 
    }
  };

  return paperInfo; 

  /*
  var paperNo = null, // paper number
      //isAutomatic = 'Y',
      paperInfo = null; 
      paperType = ''
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

  };

  return paperNumHandlers;
  */
});