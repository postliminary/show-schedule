'use strict';

/**
 * @ngdoc function
 * @name showScheduleApp.controller:ShowsCtrl
 * @description
 * # ShowsCtrl
 * Controller of the showScheduleApp
 */
angular.module('showScheduleApp')
  .controller('ShowsCtrl', function ($scope, $http, airdaySvc) {
    // Actions
    $scope.byAirday = function (value) {
        $scope.query.airday = airdaySvc.getByValue(value).value;
    };
    
    $scope.popupFindEpisodes = function(show) {
        $scope.selected = show;
    };
    
    $scope.closeFindEpisodes = function() {
        $scope.selected = undefined;
    };
    
    // Model
    $scope.airdays = airdaySvc.getAirdays();
    $scope.query = { airday: airdaySvc.getToday().value };
    $http.get('data/shows.json').success(function(data) {
        $scope.shows = data;
    });
  });
