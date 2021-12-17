'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('EditCtrl', function () {
    var vm = this;

    vm.menuTemplate = {
      url: 'views/menu.html'
    }


    vm.user = {
      email:sessionControl.get('email'),
      name:sessionControl.get('username'),
      avatar: sessionControl.get('avatar')
    }
  });
