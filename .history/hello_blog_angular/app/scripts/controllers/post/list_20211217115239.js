'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the helloApp
 */

  angular.module('helloApp', ['postService'])
       .controller('ListCtrl', ['postControl', '$scope', '$http', function (postControl, $scope, $http) {
        var vm = this;

       this.GetPosts = function () {
          postControl.GetPosts()
                       .then(onSuccess, onError)
       };


        vm.menuTemplate = {
          url: 'views/menu.html'
        }



}]);
