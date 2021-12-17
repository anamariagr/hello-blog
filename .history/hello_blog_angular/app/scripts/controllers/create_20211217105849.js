'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('CreateCtrl', function (authUser) {
    var vm = this;

    vm.loginForm = {
      email:'writer@writer.com',
      password:'writer'
    };

    vm.login = function (){
      authUser.loginApi(vm.loginForm);
    }
  });
