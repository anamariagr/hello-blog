'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:CreationController
 * @description
 * # CreationController
 * Controller of the helloApp
 */
 angular.module('helloApp')
 .controller('CreationController', function (authUser) {
  var vm = this;

  vm.menuTemplate = {
    url: 'views/menu.html'
  }


  vm.hola="saludo"
 });
