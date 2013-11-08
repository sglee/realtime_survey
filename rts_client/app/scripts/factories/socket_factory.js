 /* 
 * socket factory
 * 실시간 통신 관련 factory 
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/26)
 */
'use strict';

angular.module('rtsClientApp')
.factory('socketFactory', function($rootScope){
/*
	  var socket = io.connect('http://localhost:3001'); // Connection to the server socket
	  
	  return {
	  	on: function(eventName, callback){
		  		socket.on(eventName, function(){
			  		var args = arguments;
			  		$rootScope.$apply(function(){
			  			callback.apply(socket, args);
			  		});	  			
	  			});
		},
		emit: function(eventName, data, callback){
	  		socket.emit(eventName, data, function(){
	  			var args = arguments;
	  			$rootScope.$apply(function(){
	  				if(callback){
	  					callback.apply(socket, args);
	  				}
	  			});
	  		});
	  	}
	  };
*/
});
