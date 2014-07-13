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
        $scope.airdays = airdaySvc.getAirdays();
        $scope.activeAirday = airdaySvc.getToday();

    });
