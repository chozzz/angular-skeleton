"use strict";

/**
 * @ngdoc overview
 * @name angularSkeletonApp
 * @description
 * # angularSkeletonApp
 *
 * Main module of the application.
 */
angular
.module("angularSkeletonApp", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
    "ui.router",
    "ui.bootstrap"
])
.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            "url": "/",
            "views": {
                "root": {
                    "templateUrl": "modules/_core/views/empty.view.html"
                },
                "content@home": {
                    "templateUrl": "modules/home/views/home.view.html",
                    "controller": "HomeCtrl"
                }
            }
        });
}]);
