'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:CreateCrtl
 * @description
 * # CreateCrtl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('CreateCrtl', function (postService) {
    var vm = this;

    vm.menuTemplate = {
      url: 'views/menu.html'
    }
    vm.posts=[];

    vm.title="";
    vm.description="";

    vm.sendData = function(){

      console.log("aqui esoy ",vm.title);
    };



    postService.postList().then(function(response){

        vm.posts=response.data;
        console.log(vm.posts, 'main');

    });



  });
