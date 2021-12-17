'use strict';


angular.module('helloApp')
.controller('MenuCtrl', function($location){
    var vm = this;

    vm.isActive = function (viewLocation){
      return viewLocation === $location.path();

    };

});
