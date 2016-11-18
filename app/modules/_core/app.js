'use strict';

/**
 * @ngdoc overview
 * @name angularSkeletonApp
 * @description
 * # angularSkeletonApp
 *
 * Main module of the application.
 */
angular
.module('angularSkeletonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'modules/home/views/main.html',
        controller: 'MainCtrl'
    })
    .when('/about', {
        templateUrl: 'modules/about/views/about.html',
        controller: 'AboutCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
