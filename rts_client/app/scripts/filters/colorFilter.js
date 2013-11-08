 /* 
 * status filter 
 * 설문상태를 색상으로 강조한다. 
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/26)
 */
'use strict';

angular.module('rtsClientApp')
// Our is-user-or-email validation
.filter('color', function($locale){
  return function(status){
    if(status == 'start')
      return 'red';
    else
      return 'gray';
  };
});
