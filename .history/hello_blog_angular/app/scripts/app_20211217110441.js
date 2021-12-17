'use strict';

/**
 * @ngdoc overview
 * @name helloApp
 * @description
 * # helloApp
 *
 * Main module of the application.
 */
angular
  .module('helloApp', [
    'authService',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer',
    'toastr'
  ])
  .config(function ($routeProvider, $authProvider) {
     $authProvider.loginUrl = 'http://localhost:8000/auth_login'

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreationCrtl',
        controllerAs: 'create'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function($rootScope, $location, authUser, toastr){
        var rutasPrivadas = ['/','/edit'];

        $rootScope.$on('$routeChangeStart', function(){
          if(($.inArray($location.path(), rutasPrivadas) !== -1) && !authUser.isLoggedIn()){
            toastr.error('debe iniciar sesion para continuar.', 'Mensaje');
              $location.path('/login');
          }
        });
  })
