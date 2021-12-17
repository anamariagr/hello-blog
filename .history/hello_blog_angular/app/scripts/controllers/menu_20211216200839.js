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
      email:"asfasd",
      name:"asdfasd",
      avatar: "sadf"
    }
    vm.otro="asdfasd";

    vm.logout = function(){
        authUser.logout();
    };

    vm.isActive = function (viewLocation){
      return viewLocation === $location.path();

    };

});
