'use strict'

angular.module('postService',[])
.factory('postService', function($http, toastr, $location){

  var urlApi="http://localhost:8000/";
  return{
    postList:function (loginForm){

      return $http({
                  method: 'GET',
                  url: urlApi+'post',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
               });
    },
    postCreate:function (title,description){

      return $http({
                  method: 'POST',
                  url: urlApi+'post',
                  data: { title: 'title',description:description },
                  headers: { 'Content-Type': 'application/json' }
               });
    }

  }
});
