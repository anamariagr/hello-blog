'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:ListCtrl
 * @description
 * # EditCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('ListCtrl', function (postControl, $location, $scope) {
    var vm = this;
    vm.posts=[];

    postControl.postList().then(onSuccess,onerror);

    var onSuccess = function (response) {
      //$scope.user = response.data;
      //$scope.error = '';
 };

 var onError = function (reason) {
      $scope.error = "Error in retrieving data.";
 };

    vm.menuTemplate = {
      url: 'views/menu.html'
    }
  });
