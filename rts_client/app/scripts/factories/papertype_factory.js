 /* 
 * paperType factory
 * 설문종류 설정 및 관리 
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/26)
 */
'use strict';

angular.module('rtsClientApp')
.factory('paperTypeFactory', 
	function($resource){
	  return $resource('/api/paper_types/:paper_type_code/:user_id', {}, {
	  		  get: {method:'GET', params:{paper_type_code:'@paper_type_code', user_id:'@user_id'}, isArray:false},
			  query: {method:'GET', params:{paper_type_code:'@paper_type_code', 
											user_id:'@user_id'}, isArray:true},
			  post: {method:'POST'},
			  update: {method:'PUT', params: {paper_type_code:'@paper_type_code',
											  name:'@name'
											 }}, 
			  remove: {method:'DELETE'}
	});
	  
});
