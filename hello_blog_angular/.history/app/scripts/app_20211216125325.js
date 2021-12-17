'use strict';

/**
 * @ngdoc overview
 * @name frontAngularApp
 * @description
 * # frontAngularApp
 *
 * Main module of the application.
 */
angular
  .module('frontAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer'
  ])
  .config(function ($routeProvider, $authProvider) {
   // $authProvider.lolginUrl = 'http://localhost:9000/auth_login'
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login',
      {
        templateUrl:'view/login.html',
        controller:'loginCtrl',
        controllerAs:'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
