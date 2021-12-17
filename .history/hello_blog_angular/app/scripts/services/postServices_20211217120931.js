'use strict'

angular.module('postService',[])
.factory('postControl', function($http, toastr, $location){

  var postList = function(){

    $http({
      method: 'GET',
      url: '/Home/GetEmployeeList',
      params: { filterData: 'Test' },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
   });

  };

  return{
    postList:function (loginForm){

      postList();
    }

  }
});
