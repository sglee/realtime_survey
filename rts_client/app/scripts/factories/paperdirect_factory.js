 /* 
 * paperdirect factory
 * 설문 및 설문지시문 관리 
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/26)
 */
'use strict';

angular.module('rtsClientApp')
// 설문지시문 관리
.factory('paperDirectFactory', 
	function($resource){
	  return $resource('/api/directives/:id', {}, {
	  		  get: {method:'GET', params:{code:'@code', user_id:'@user_id'}, isArray:false},
			  query: {method:'GET', params:{code:'@code', user_id:'@user_id'}, isArray:true},
			  post: {method:'POST'},
			  update: {method:'PUT', params: {code:'@code',
											  name:'@name',
											  is_use:'@is_use',
											  user_id: '@user_id'}}, 
			  remove: {method:'DELETE'}
	});
	  
})
// 설문지 관리 
.factory('paperFactory', 
	function($resource){
	  return $resource('/api/papers/:paper_id', {}, {
	  		  get: {method:'GET', params:{paper_id:'@paper_id'}, isArray:false},
			  query: {method:'GET', params:{paper_id:'@paper_id'}, isArray:true},
			  post: {method:'POST'},
			  update: {method:'PUT', params: {paper_id:'@paper_id',
											  code:'@code',
											  user_id:'@user_id',
											  limit_time:'@limit_time',
											  question_qty:'@question_qty',
											  is_automatic:'@is_automatic',
											  is_use:'@is_use',
											  paper_type_code: '@paper_type_code'}}, 
			  remove: {method:'DELETE'}
	});
	  
})
;
