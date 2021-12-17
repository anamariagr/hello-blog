'use strict'

angular.module('postService',[])
.factory('postControl', function($http, toastr, $location){
  return{
    postList:function (loginForm){

      return $http({
                  method: 'GET',
                  url: 'http://127.0.0.1:8000/api/post',
                  params: { filterData: 'Test' },
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
               });
    }

  }
});
