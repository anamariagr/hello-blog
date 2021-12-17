'use strict';

angular.module('frontAngularApp')
.controller('loginCtrl', function(){
  var vm = this;
  vm.loginForm = {
    email:'',
    password:''
  };
});
