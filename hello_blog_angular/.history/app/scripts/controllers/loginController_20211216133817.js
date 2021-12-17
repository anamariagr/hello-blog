'use strict';

angular.module('helloBlogAngularApp')
.controller('loginCtrl', function(){
  var vm = this;
  vm.loginForm = {
    email:'',
    password:''
  };
});
