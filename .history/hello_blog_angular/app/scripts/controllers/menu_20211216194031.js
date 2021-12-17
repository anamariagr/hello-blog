'use strict';


angular.module('helloApp')
.controller('MenuCtrl', function(authUser, $location, $scope ){
    var vm = this;

    vm.isLogin = authUser.isLoggedIn();
    $scope-$wtch(function(){
      return authUser.isLoggedIn();
    }, function(newVal){
        if(typeof newVal !=='undefined'){
            vm.isLogin = authUser.isLoggedIn();
        }
    })

    vm.isActive = function (viewLocation){
      return viewLocation === $location.path();

    };

});
