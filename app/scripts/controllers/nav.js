'use strict';

/**
 * @ngdoc function
 * @name showScheduleApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the showScheduleApp
 */
angular.module('showScheduleApp')
    .controller('NavCtrl', function($scope, $location, navSvc, airdaySvc) {
        // Actions
        $scope.onSelectAirday = function(airday) {
            navSvc.selectAirday(airday);
        };

        // View Model
        $scope.selectedAirday = navSvc.getSelectedAirday();
        $scope.airdays = airdaySvc.getAirdays();
        $scope.position = navSvc.position;
    });
