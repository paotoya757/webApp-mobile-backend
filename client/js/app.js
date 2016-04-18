'use strict';

/**
 * @ngdoc overview
 * @name trabajoFinalConferenciasApp
 * @description
 * # trabajoFinalConferenciasApp
 *
 * Main module of the application.
 */
var app = angular
  .module('WebAppLugar', [
    'ngResource',
    'ngRoute',
    'firebase'
  ])
  .config(
    function ($routeProvider) {
      $routeProvider
        .when('/ofertas', {
          templateUrl: 'views/ofertas.html',
          controller: 'ofertasCtrl'
        })
        .otherwise({
          redirectTo: '/ofertas'
        });
    })
  ;


//---------------------------------------------------------------------------
// Filtros
//---------------------------------------------------------------------------
