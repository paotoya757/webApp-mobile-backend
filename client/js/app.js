'use strict';

/**
 * @ngdoc overview
 * @name trabajoFinalConferenciasApp
 * @description
 * # trabajoFinalConferenciasApp
 *
 * Main module of the application.
 */
var conferenceApp = angular
  .module('LugarWebApp', [
    'ngResource',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/ofertas', {
        templateUrl: 'views/conferences-home.html',
        controller: 'ofertasController',
        controllerAs: 'ofertasController'
      })
      .otherwise({
        redirectTo: '/ofertas'
      });
  })
  ;


//---------------------------------------------------------------------------
// Filtros
//---------------------------------------------------------------------------
