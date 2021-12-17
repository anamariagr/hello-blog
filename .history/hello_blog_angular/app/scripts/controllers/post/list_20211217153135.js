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

    vm.title="";
    vm.description="";

    postService.postList().then(function(response){

        vm.posts=response.data;
        console.log(vm.posts);

    });





    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });
