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

    var muestra=postService.postList().then(function(response){
        console.log(response.data);
    });

    console.log("muestra ",muestra);


    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });
