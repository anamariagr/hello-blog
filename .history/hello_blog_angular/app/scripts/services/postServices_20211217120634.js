'use strict'

angular.module('postService',[])
.factory('postControl', function($auth, toastr, $location){

  var postList = function(){

    console.log("aquiii estoy ");

  };

  return{
    postList:function (loginForm){

      postList();
    }

  }
});
