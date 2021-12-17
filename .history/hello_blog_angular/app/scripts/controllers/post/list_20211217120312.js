'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the helloApp
 */

  angular.module('helloApp')
  .controller('ListCtrl', function (postControl, $location, $scope ,) {
    var vm = this;


    vm.postCreate = postControl.postCreate();

    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });



