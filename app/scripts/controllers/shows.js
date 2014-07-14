'use strict';

/**
 * @ngdoc function
 * @name showScheduleApp.controller:ShowsCtrl
 * @description
 * # ShowsCtrl
 * Controller of the showScheduleApp
 */
angular.module('showScheduleApp')
    .controller('ShowsCtrl', function($scope, $sce, navSvc, showSvc, airdaySvc, urlSvc, keywordSvc) {
        // Number of shows per row
        var showCount = 4;
        $scope.partition = {
            count: showCount,
            size: 12 / showCount
        };

        var getShows = function() {
            if (navSvc.position.editing) {
                showSvc.getShows().then(function(shows) {
                    $scope.shows = shows;
                });
            } else {
                showSvc.getCurrentlyWatching().then(function(shows) {
                    $scope.shows = shows;
                });
            }
        };

        // Actions
        $scope.urlForShow = function(show) {
            return urlSvc.getFindEpisodesUrlForShow(show);
        };

        $scope.isWatchingShow = function(show) {
            return showSvc.isWatchingShow(show.id);
        };

        $scope.watchShow = function(show) {
            showSvc.watchShow(show.id);
        };

        $scope.dontWatchShow = function(show) {
            showSvc.dontWatchShow(show.id);
            getShows();
        };

        $scope.editKeywords = function(show) {
            navSvc.editKeywords(show);
        };

        navSvc.onSelectAirday($scope, function(message) {
            $scope.query.airday = message.selected.value;
        });

        keywordSvc.onSetKeywords($scope, function(message) {
            getShows();
        });

        // View Model
        getShows();

        $scope.airdays = airdaySvc.getAirdays();
        $scope.query = {
            airday: navSvc.getSelectedAirday().value
        };
        $scope.position = navSvc.position;
    });
