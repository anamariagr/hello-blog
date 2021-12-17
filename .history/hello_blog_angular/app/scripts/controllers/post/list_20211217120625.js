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

    postControl.postList();
    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });
