'use strict';

angular.module('rtsClientApp')
// angular-resource test 
.factory('managerFactory', 
	function($resource){
	  return $resource('/api/managers/:user_id', {}, {
	  		  get: {method:'GET', params:{user_id:'@user_id'}, isArray:false},
			  query: {method:'GET', params:{user_id:'@user_id'}, isArray:true},
			  post: {method:'POST'},
			  update: {method:'PUT', params: {user_id:'@user_id',
			                                  password:'@is_use', 
											  name:'@name',
											  hp:'@hp',
											  email:'@email'}}, 
			  remove: {method:'DELETE'}
	});
	  
}) 
//------------------------------------------------------------------------
// 2013.10.26
// Issue: Set_params에서 조회조건을 줄 경우 등록할때 User_id가 무시되고 
//        몽고디비에 저장되는 문제때문에 별도로 Rails에서 manager_controller를 따로 정의함. 
//        개선사항 요구됨. 
//------------------------------------------------------------------------
.factory('managerBasicFactory',
	function($resource){
	  return $resource('/api/manager/:user_id', {}, {
	  		  get: {method:'GET', params:{user_id:'@user_id'}, isArray:false},
			  query: {method:'GET', params:{user_id:'@user_id'}, isArray:true}
			  //,
			  //post: {method:'POST'},
			  //update: {method:'PUT', params: {user_id: '@user_id'}},
			  //remove: {method:'DELETE'}
	});
	  
}) 
// angular-rails-resouce test ---> failed
.factory('Manager', ['railsResourceFactory', function(railsResourceFactory){
  return railsResourceFactory({url: '/api/managers/:id.json', 
          name: 'manager',
          defaultParams: { id: '@id' }

        });
}]); 
