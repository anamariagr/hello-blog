'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('LoginCtrl', function (authUser) {
    var vm = this;

    vm.loginForm = {
      email:'',
      password:''
    };

    vm.login = function (){
      authUser.loginApi(vm.loginForm);
    }
  });
