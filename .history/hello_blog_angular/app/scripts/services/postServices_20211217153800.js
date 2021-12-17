'use strict'

angular.module('postService',[])
.factory('postService', function($http, toastr, $location){

  var urlApi="http://127.0.0.1:8000/api/";
  return{
    postList:function (loginForm){

      return $http({
                  method: 'GET',
                  url: urlApi+'post',
                  params: { filterData: 'Test' },
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
               });
    },
    postCreate:function (title,description){

      return $http({
                  method: 'POST',
                  url: urlApi+'post',
                  data: { title: 'title',description:description },
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
               });
    }

  }
});