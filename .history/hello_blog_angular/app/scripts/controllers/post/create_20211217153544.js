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



      postService.postCreate(vm.title,vm.description).then(function(response){

        vm.posts=response.data;
        console.log(vm.posts, 'main');

       });

    };



    postService.postList().then(function(response){

        vm.posts=response.data;
        console.log(vm.posts, 'main');

    });



  });
