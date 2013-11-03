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
	  return $resource('/api/directives/:paper_id/:directive_no', {}, {
	  		  get: {method:'GET', params:{paper_id:'@paper_id', directive_no:'@directive_no'}, isArray:true},
			  query: {method:'GET', params:{paper_id:'@paper_id', directive_no:'@directive_no'}, isArray:true},
			  post: {method:'POST'},
			  update: {method:'PUT', params: {paper_id:'@paper_id', 
			  								  directive_no:'@directive_no',
											  content:'@content',
											  q_type:'@q_type'
											}}, 
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
// 지시문관련 선택항목 정보  
.factory('questionItemsFactory', 
	function($resource){
	  return $resource('/api/question_items/:directive_no', {}, {
	  		  get: {method:'GET', params:{directive_no:'@directive_no'}, isArray:false},
			  query: {method:'GET', params:{directive_no:'@directive_no'}, isArray:true},
			  post: {method:'POST'},
			  update: {method:'PUT', params: {directive_no:'@directive_no',
											  paper_id:'@paper_id',
											  question_no:'@question_no',
											  question:'@question',
											  img_url:'@img_url',
											  }}, 
			  remove: {method:'DELETE'}
	});  
})
// 설문히스토리정보 등록 
// 설문상태정보 추가 
.factory('paperHistoryFactory', 
	function($resource){
	  return $resource('/api/paper_history/:directive_no', {}, {
	  		  get: {method:'GET', params:{directive_no:'@directive_no'}, isArray:false},
			  query: {method:'GET', params:{directive_no:'@directive_no'}, isArray:true},
			  post: {method:'POST'},
			  update: {method:'PUT', params: {directive_no:'@directive_no',
											  paper_id:'@paper_id',
											  question_no:'@question_no',
											  question:'@question',
											  img_url:'@img_url',
											  }}, 
			  remove: {method:'DELETE'}
	});  
})
;
