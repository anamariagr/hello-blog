'use strict'

angular.module('postService', [])
       .service('postControl', ['$http',function ($http) {
          this.SearchEmployee = function () {
               return $http({
                  method: 'GET',
                  url: '/Home/GetEmployeeList',
                  params: { filterData: 'Test' },
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
               });
          }
}]);
