'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('ListCtrl', function () {
    var vm = this;

    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });



  angular.module('helloApp', ['postService'])
       .controller('ListCtrl', ['postControl', '$scope', '$http', function (postControl, $scope, $http) {

       this.GetPosts = function () {
          postControl.GetPosts()
                       .then(onSuccess, onError)
       };



}]);
