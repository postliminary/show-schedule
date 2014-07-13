'use strict';

/**
 * @ngdoc function
 * @name showScheduleApp.controller:ShowsCtrl
 * @description
 * # ShowsCtrl
 * Controller of the showScheduleApp
 */
angular.module('showScheduleApp')
    .controller('ShowsCtrl', function($scope, $sce, showSvc, airdaySvc, urlSvc) {
        // Number of shows per row
        var showCount = 4;
        $scope.partition = {
            count: showCount,
            size: 12 / showCount
        };

        // Actions
        $scope.popupFindEpisodes = function(show) {
            $scope.findEpisodesFor = {
                title: show.title,
                url: $sce.trustAsResourceUrl(urlSvc.getFindEpisodesUrlForShow(show))
            };
        };

        $scope.closeFindEpisodes = function() {
            $scope.findEpisodesFor = null;
        };

        $scope.urlForShow = function(show) {
            return urlSvc.getFindEpisodesUrlForShow(show);
        }

        airdaySvc.onSelectAirday($scope, function(message) {
            $scope.query.airday = message.selected.value;
        });

        // View Model
        showSvc.getShows().then(function(shows) {
            $scope.shows = shows;
        });
        $scope.airdays = airdaySvc.getAirdays();
        $scope.query = {
            airday: airdaySvc.getSelected().value
        };
        $scope.findEpisodesFor = null;
    });
