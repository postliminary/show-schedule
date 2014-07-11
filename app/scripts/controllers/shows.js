'use strict';

/**
 * @ngdoc function
 * @name showScheduleApp.controller:ShowsCtrl
 * @description
 * # ShowsCtrl
 * Controller of the showScheduleApp
 */
angular.module('showScheduleApp')
    .controller('ShowsCtrl', function($scope, showSvc, airdaySvc) {
        // Actions
        $scope.byAirday = function(value) {
            $scope.query.airday = airdaySvc.getByValue(value).value;
        };

        $scope.popupFindEpisodes = function(show) {
            $scope.selected = show;
        };

        $scope.closeFindEpisodes = function() {
            $scope.selected = undefined;
        };

        // View Model
        showSvc.getShows().then(function(shows) {
            $scope.shows = shows;
        });
        $scope.airdays = airdaySvc.getAirdays();
        $scope.query = {
            airday: airdaySvc.getToday().value
        };
    });
