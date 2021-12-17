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
       .controller('ListCtrl', ['postControl', '$scope', '$http', function (EmployeeSer, $scope, $http) {

       this.GetAllEmployee = function () {
            EmployeeSer.SearchEmployee()
                       .then(onSuccess, onError)
       };

       var onSuccess = function (response) {
            $scope.user = response.data;
            $scope.error = '';
       };

       var onError = function (reason) {
            $scope.error = "Error in retrieving data.";
       };

}]);
