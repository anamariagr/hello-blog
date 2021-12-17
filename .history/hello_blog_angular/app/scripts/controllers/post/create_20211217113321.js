'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:CreateCrtl
 * @description
 * # CreateCrtl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('CreateCrtl', function () {
    var vm = this;

    vm.menuTemplate = {
      url: 'views/menu.html'
    }

    vm.isLogin = authUser.isLoggedIn();


    $scope.$watch(function(){
      return authUser.isLoggedIn();
    }, function(newVal){
        if(typeof newVal !=='undefined'){
            vm.isLogin = authUser.isLoggedIn();
        }
    });


    vm.user = {
      email:sessionControl.get('email'),
      name:sessionControl.get('username'),
      avatar: sessionControl.get('avatar')
    }

  });
