'use strict'

angular.module('helloBlogFrontApp')
.controller('loginCtrl',function(){
  var vm = this;
  vm.loginFrorm = {
    email:'',
    password:''
  };
});
