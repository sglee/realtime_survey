 /* 
 * groupInfo controller 
 * 그룹관리 컨트롤러
 * 그룹코드는 'G' + UUID
 * Factory: groupInfoFactory
 * History
 * v1.0 - 최초 작성, sglee(2013/10/26)
 */
'use strict';

angular.module('rtsClientApp')
  .controller('AppCodeManagerCtrl', function ($location,$rootScope, $scope, $state, $http, 
        groupInfoFactory, paperTypeFactory, paperFactory,  UserService) {

    $scope.groupinfo = {}; 
    $scope.paper_type = {};

    var userId = UserService.getLoginInfo();
    var userParam = {code:'', user_id: userId };

    groupInfoFactory.query({code:'', user_id:UserService.getLoginInfo()}, 
      function(data){
        if(data.length == 0) return;
        return $scope.groupinfo  = data;
      },
      function(error){
        alert(error);
      });    

   /*
    paperTypeFactory.query(function(result){
          if(result.user_id == null) return;
          $scope.paper_type = result || {};
        });
    */

    //--------------------------
    // Generate uuid code 
    //--------------------------
    $scope.getUUIDCode = function (identity) {
       return identity + UUID.generate();
    };
    //-----------------
    // 설문종류 관리
    //------------------
    $scope.getPaperTypeParams = function(){
      return {
        code: $scope.paper_type.paper_type_code,
        name: $scope.paper_type.name,
        user_id: $scope.paper_type.user_id
      };
    };   
    $scope.addPaperType = function(){
      debugger;
      var user_id = UserService.getLoginInfo();
      if(user_id == null) return $location.path("/");

      $scope.paper_type.paper_type_code = $scope.getUUIDCode('P');
      $scope.paper_type.name = $scope.paper_type.name;
      $scope.paper_type.user_id = user_id;

      $http({
        url: '/api/paper_types',
        method: 'POST',
        data: { paper_type: $scope.paper_type }
      }).success(function(data, status, headers, config) {  
        $rootScope.$broadcast('event:notifyPaperType',{message:status});
        // 설문코드 등록이 완료되면 현재 등록된 설문종류를 모두 불러온다. 
         paperTypeFactory.query({user_id:user_id}, function(result){
          $scope.paper_type = result || {};
        });

      }).error(function(data,status,headers, config) {
        $scope.status = status; 
        alert('fail addGroup function');
      });
    };

     $scope.updatePaperType = function(){
      if($scope.getPaperTypeParams().code == null) {
       $rootScope.$broadcast('event:notifyPaperType',{message:'update failed'});
        return;
      }

      paperTypeFactory.update($scope.getPaperTypeParams(), function(data){
        $scope.paper_type = data || {};
      },
      function (error) {
         $rootScope.$broadcast('event:notifyPaperType',{message:error});
      });
    };  

    $scope.deletePaperType = function(){
      paperTypeFactory.remove($scope.getPaperTypeParams(), function(data){
        $scope.paper_type = data || {};
      },
      function (error) {
        $scope.paper_type.name = error; 
        console.log(error);
      });
    };       

    $scope.getParams = function(){
      return {
        code: $scope.groupinfo.code,
        name: $scope.groupinfo.name,
        is_use: $scope.groupinfo.is_use,
        user_id: UserService.getLoginInfo()
      };
    };
    $scope.add = function(){

      var user_id = UserService.getLoginInfo();
      if(user_id == null) return $location.path("/");
      
      var groupinfos = {
        user_id : user_id,
        code : $scope.getUUIDCode('G'),
        name : $scope.groupinfo.name,
        is_use : 'Y'
      };

      $http({
        url: '/api/groupinfos',
        method: 'POST',
        data: { groupinfo: groupinfos }
      }).success(function(data, status, headers, config) {
        // 그룹추가가 완료되면 다시 전체를 조회해서 그룹선택 콤보에 바인딩한다. 
        $rootScope.$broadcast('event:notifyGroup',{message:status});

        $scope.status = status;
        $scope.groupinfo = groupInfoFactory.query(function(result){

       // $scope.groupinfo = groupInfoFactory.query(userParam,function(result){
       //               items = $scope.items = result;
       // });
        });

       // $scope.groupinfo = groupInfoFactory.query(userParam,function(result){
       //               items = $scope.items = result;
       // });

      }).error(function(data,status,headers, config) {
        $scope.status = status; 
        alert('fail addGroup function');
      });
    };    

    $scope.update = function(){
      if($scope.getParams().code == null) {
       $rootScope.$broadcast('event:notifyGroup',{message:'update failed'});
        return;
      }

      groupInfoFactory.update($scope.getParams(), function(data){
        $scope.groupinfo = data || {};
      },
      function (error) {
         $rootScope.$broadcast('event:notifyGroup',{message:error});
      });
    };  

    $scope.delete = function(){
      groupInfoFactory.remove($scope.getParams(), function(data){
        $scope.groupinfo = data || {};
      },
      function (error) {
        $scope.groupinfo.name = error; 
        console.log(error);
      });
    };                

  });
