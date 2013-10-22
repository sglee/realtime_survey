'use strict';


angular.module('rtsClientApp')
.factory('managerFactory', function($resource){
  return $resource('/api/managers');
})
.factory('Manager', ['railsResourceFactory', function(railsResourceFactory){
  return railsResourceFactory({url: '/api/managers/:id', 
          name: 'manager',
          defaultParams: { name: 'apples' }

        });
}]); 
