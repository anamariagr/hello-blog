'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('AboutCtrl', function () {
    var vm = this;

    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });
