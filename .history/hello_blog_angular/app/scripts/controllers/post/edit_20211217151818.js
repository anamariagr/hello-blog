'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('EditCtrl', function (postService) {
    var vm = this;

    vm.menuTemplate = {
      url: 'views/menu.html'
    }

    vm.posts=[];

    postService.postList().then(function(response){

        vm.posts=response.data;
        console.log(vm.posts, 'main');

    });



  });
