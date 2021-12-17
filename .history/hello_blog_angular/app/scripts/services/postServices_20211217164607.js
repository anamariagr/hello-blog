'use strict'

angular.module('postService',[])
.factory('postService', function($http, toastr, $location){

  var urlApi="http://localhost:8000/api/";




  var checkPermission = function(permission){
    var roles=JSON.parse(sessionControl.get('roles'));
    for(var r=0 ; r < roles.length; r++){
      var permissions=roles[r]["permissions"];
        for(var p = 0 ; p< permissions.length; p ++){
          if(permission==permissions[p]["name"]){
            return true;
          }
        }
    }

    return false;

  };

  return{
    postList:function (loginForm){



      return $http({
                  method: 'GET',
                  url: urlApi+'post',
                  headers: { 'Content-Type': 'application/json' }
               });
    },
    postCreate:function (title,description){

      return $http({
                  method: 'POST',
                  url: urlApi+'post',
                  data: { title: title,description:description },
                  headers: { 'Content-Type': 'application/json' }
               });
    },
    postEdit:function (title,description,id){

      return $http({
                  method: 'PUT',
                  url: urlApi+'post/'+id,
                  data: { title: title,description:description},
                  headers: { 'Content-Type': 'application/json' }
               });
    },
    postDelete:function (id){

      return $http({
                  method: 'DELETE',
                  url: urlApi+'post/'+id,
                  headers: { 'Content-Type': 'application/json' }
               });
    },
    postPublish:function (id){

      return $http({
                  method: 'POST',
                  url: urlApi+'post/'+id+'/publish',
                  headers: { 'Content-Type': 'application/json' }
               });
    }

  }
});
