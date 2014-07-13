'use strict';

/**
 * @ngdoc overview
 * @name showScheduleApp
 * @description
 * # showScheduleApp
 *
 * Main module of the application.
 */
angular
    .module('showScheduleApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'LocalStorageModule'
    ])
    .config(['localStorageServiceProvider',
        function(localStorageServiceProvider) {
            localStorageServiceProvider.setPrefix('ls');
        }
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/shows', {
                templateUrl: 'views/shows.html',
                controller: 'ShowsCtrl'
            })
            .when('/shows/edit', {
                templateUrl: 'views/shows.html',
                controller: 'ShowsCtrl'
            })
            .when('/settings', {
                templateUrl: 'views/settings.html',
                controller: 'SettingsCtrl'
            })
            .otherwise({
                redirectTo: '/shows'
            });
    })
    .constant('appConfig', {
        findEpisodesUrlPrefixDefault: 'http://www.google.com/search?q=episodes+',
        showsResource: 'data/shows.json'
    });
