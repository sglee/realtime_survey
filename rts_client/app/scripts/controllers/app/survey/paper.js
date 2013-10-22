/* 
 * paper controller
 *
 *  설문지등록 및 속성을 관리하는 컨트롤
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
	.controller('AppSurveyPaperCtrl', ['$scope', '$location', 'Manager', function($scope, $location, Manager){

       // if(typeof $scope.authUserId === 'undefined' || $scope.author == null)
        //	return $location.path("/");

		$scope.searching = false; 
		$scope.manager = Manager.get({name:'apples'});
		$scope.manager.then(function(results){
	    	debugger;
	    	var testUser = 'redsoft';
	    	if(results != null){
	    		debugger; 
	    		var mng = results;
	    		for(var i=0, len = mng.length; i < len; i++){
	    			if(mng[i].name == testUser){
	    				alert(mng[i].userId);
	    				$scope.searching = true; 
	    				//$scope.userId = mng[i].userId; 
	    				return; 
	    			}
	    		}
	    	}

		}, function(error){
			$scope.errorMsg = error;
		});

/*
		Manager.get({name:'redsoft'}).then(function(manager){
		});
*/
	
	    // Find a single book and update it
	    //Book.get(1234).then(function (book) {
	    //    book.lastViewed = new Date();
	    //    book.update();
	    //});
	    // Create a book and save it
    	//new Book({title: 'Gardens of the Moon', author: 'Steven Erikson', isbn: '0-553-81957-7'}).create();
		/*
		$scope.managers = managerFactory.query({user_id: 'red'}).then(function(manager){
			$scope.manager = manager;
			alert($scope.manager.user_id);
		});
		*/
	}]);