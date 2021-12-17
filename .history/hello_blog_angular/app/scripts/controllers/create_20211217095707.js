'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the helloApp
 */
 angular.module('helloApp')
 .controller('CreateCtrl', function (authUser) {
  var vm = this;

  vm.menuTemplate = {
    url: 'views/menu.html'
  }
 });
