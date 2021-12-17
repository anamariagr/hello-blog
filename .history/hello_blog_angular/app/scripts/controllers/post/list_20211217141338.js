'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:ListCtrl
 * @description
 * # EditCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('ListCtrl', function (postService, $location, $scope,sessionControl) {
    var vm = this;
    vm.posts=[];

    postService.postList().then(function(response){
      console.log(response.data);
        vm.posts=response.data;
    });
    vm.da = {
      title:postService.get('title'),
      description:'writer'
    };



    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });
