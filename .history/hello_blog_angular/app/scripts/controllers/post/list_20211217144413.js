'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:ListCtrl
 * @description
 * # EditCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('ListCtrl', function (postService, $location, $scope) {
    var vm = this;
    vm.posts=[];

    postService.postList().then(function(response){

        vm.posts=response.data;
        vm.data=[1,2,3,4];
        console.log(vm.posts);

    });





    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });
