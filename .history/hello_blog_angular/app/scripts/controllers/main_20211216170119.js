'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('MainCtrl', function () {
    var vm = this;

    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });
