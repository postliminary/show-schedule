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
            .when('/shows/watchlist', {
                templateUrl: 'views/watchlist.html',
                controller: 'ShowsCtrl'
            })
            .otherwise({
                redirectTo: '/shows'
            });
    })
    .constant('appConfig', {
        findEpisodesUrlPrefixDefault: 'http://www.google.com/search?q=episodes+',
        showsResource: 'data/shows.json'
    });
