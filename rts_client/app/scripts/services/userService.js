'use strict';

angular.module('rtsClientApp')
.service('UserInfo', function () {

})
.factory('UserService', function($http, $q) {
  var token = null,
      user_id = null,
      currentUser;
 
  var tokenHandlers = {
    // store our token for later retrieval
    set: function(v) { token = v; },
    get: function() {
      if (!token) {
        console.log('boardCast');
        $rootScope.$broadcast('event:unauthorized');
      }
      else {
        return token;
      }
    },

    setLoginInfo: function ($scope, userId) {
      user_id = userId;
    },
    getLoginInfo: function ($scope) {
      return user_id;
    },

    getCurrentUser: function() {
      var d = $q.defer();

      if (currentUser) {
        d.resolve(currentUser);
      } else {
        $http({
          url: '/api/current_user',
          method: 'POST'
        }).then(function(data) {
          d.resolve(data.data);
        });
      }
      return d.promise;
    },

    wrapActions: function(r, actions) {
      // copy original resource
      var wrappedResource = r;
      for (var i=0; i < actions.length; i++) {
        tokenWrapper( wrappedResource, actions[i] );
      }
      // return modified copy of resource
      return wrappedResource;
    }
  };
  
  // https://gist.github.com/nblumoe/3052052
  var tokenWrapper = function(resource, action) {
    // copy original action
    resource['_' + action]  = resource[action];
    // create new action wrapping the original and sending token
    resource[action] = function( data, success, error){
      return resource['_' + action](
        angular.extend({}, data || {}, {access_token: tokenHandler.get()}),
        success,
        error
      );
    };
  };
 
  return tokenHandlers;
});