'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:ListCtrl
 * @description
 * # EditCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('ListCtrl', function (postControl, $location, $scope) {
    var vm = this;
    vm.posts=[];

    var muestra=postControl.postList().then(function(response){
        console.log(response);
    });

    console.log("muestra ",muestra);


    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });
