 /* 
 * groupFactory
 * Group Management Factory
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/26)
 */
'use strict';

angular.module('rtsClientApp')
.factory('groupInfoFactory', 
	function($resource){
	  return $resource('/api/groupinfos/:code/:user_id', {}, {
	  		  get: {method:'GET', params:{code:'@code', user_id:'@user_id'}, isArray:false},
			  query: {method:'GET', params:{code:'@code', user_id:'@user_id'}, isArray:true},
			  post: {method:'POST'},
			  update: {method:'PUT', params: {code:'@code',
											  name:'@name',
											  is_use:'@is_use',
											  user_id: '@user_id'}}, 
			  remove: {method:'DELETE'}
	});
	  
});
