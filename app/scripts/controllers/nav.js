'use strict';

/**
 * @ngdoc function
 * @name showScheduleApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the showScheduleApp
 */
angular.module('showScheduleApp')
    .controller('NavCtrl', function($scope, airdaySvc) {
        // Actions
        $scope.onSelectAirday = function() {
            airdaySvc.selectAirday($scope.selectedAirday);
        };

        // View Model
        $scope.selectedAirday = airdaySvc.getSelected();
        $scope.airdays = airdaySvc.getAirdays();
    });
