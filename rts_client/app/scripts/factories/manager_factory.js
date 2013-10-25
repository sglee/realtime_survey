'use strict';

angular.module('rtsClientApp')
// angular-resource test 
.factory('managerFactory', 
	function($resource){
	  return $resource('/api/managers/:user_id', {}, {
	  		  get: {method:'GET', params:{user_id:'@user_id'}, isArray:false},
			  query: {method:'GET', params:{user_id:'@user_id'}, isArray:true},
			  post: {method:'POST'},
			  update: {method:'PUT', params: {user_id: '@user_id'}},
			  remove: {method:'DELETE'},
			  delete: {method:'DELETE'}
	});
	  
}) // angular-rails-resouce test ---> failed
.factory('Manager', ['railsResourceFactory', function(railsResourceFactory){
  return railsResourceFactory({url: '/api/managers/:id.json', 
          name: 'manager',
          defaultParams: { id: '@id' }

        });
}]); 
