'use strict';


angular.module('helloApp')
.controller('MenuCtrl', function(authUser, $location, $scope , sessionControl){
    var vm = this;

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
    }

   $scope.$watch(function(){
     return sessionControl.get('username');
   }, function(newVal){
        if(typeof newVal !=='undefined'){
          vm.user.name = sessionControl.get('username');
        }
   })
   $scope.$watch(function(){
    return sessionControl.get('email');
  }, function(newVal){
       if(typeof newVal !=='undefined'){
         vm.user.email = sessionControl.get('email');
       }
  })

    vm.logout = function(){
        authUser.logout();
    };

    vm.isActive = function (viewLocation){
      return viewLocation === $location.path();

    };

});
