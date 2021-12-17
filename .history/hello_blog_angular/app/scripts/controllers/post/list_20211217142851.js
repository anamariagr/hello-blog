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
      console.log(response);
        vm.posts=response.data;

    });





    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });
