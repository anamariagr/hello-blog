'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('LoginCtrl', function (authUser) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
