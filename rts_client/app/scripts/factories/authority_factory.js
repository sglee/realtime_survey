 /* 
 * codeFactory
 *
 * Authority Management Factory
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/26)
 */
'use strict';

angular.module('rtsClientApp')
.factory('authorityFactory', 
	function($resource){
	  return $resource('/api/authorities/:auth_id', {}, {
	  		  get: {method:'GET', params:{auth_id:'@auth_id'}, isArray:false},
			  query: {method:'GET', params:{auth_id:'@auth_id'}, isArray:true},
			  post: {method:'POST'},
			  update: {method:'PUT', params: {auth_id:'@auth_id'}}, 
			  remove: {method:'DELETE'}
	});
	  
});
