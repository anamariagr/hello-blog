'use strict';

/**
 * @ngdoc overview
 * @name helloBlogFrontApp
 * @description
 * # helloBlogFrontApp
 *
 * Main module of the application.
 */
angular
  .module('helloBlogFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer'
  ])
  .config(function ($routeProvider, $authProvider) {
    $authProvider.loginUrl = '';
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
      .when('login',{
        templateUrl:'view/login.html',
        controller:'loginCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
