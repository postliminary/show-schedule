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
        // Number of shows per row
        var showCount = 4;
        $scope.partition = {
            count: showCount,
            size: 12 / showCount
        };
        
        // Actions
        $scope.showsByAirday = function(value) {
            $scope.query.airday = airdaySvc.getByValue(value).value;
        };

        $scope.popupFindEpisodes = function(show) {
            $scope.findEpisodesFor = show;
        };

        $scope.closeFindEpisodes = function() {
            $scope.findEpisodesFor = null;
        };

        // View Model
        showSvc.getShows().then(function(shows) {
            $scope.shows = shows;
        });
        $scope.airdays = airdaySvc.getAirdays();
        $scope.query = {
            airday: airdaySvc.getToday().value
        };
        $scope.findEpisodesFor = null;
    });
