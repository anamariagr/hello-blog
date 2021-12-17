'use strict'

angular.module('postService',[])
.factory('postControl', function($auth, toastr, $location){

  var postCreate = function(){

    console.log("aquiii estoy ");

  };

  return{
    postCreate:function (loginForm){

      postCreate();
    }

  }
});
