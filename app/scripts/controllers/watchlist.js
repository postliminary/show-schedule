'use strict';

/**
 * @ngdoc function
 * @name showScheduleApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the showScheduleApp
 */
angular.module('showScheduleApp')
    .controller('WatchlistCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
