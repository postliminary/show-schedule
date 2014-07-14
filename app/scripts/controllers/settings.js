'use strict';

/**
 * @ngdoc function
 * @name showScheduleApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the showScheduleApp
 */
angular.module('showScheduleApp')
    .controller('SettingsCtrl', function($scope, urlSvc, localStorageService) {
        $scope.clearData = function() {
            localStorageService.clearAll();
        };

        $scope.saveUrlForShowPrefix = function() {
            urlSvc.setFindEpisodesUrlPrefix($scope.urlForShowPrefix);
        };

        $scope.urlForShowPrefix = urlSvc.getFindEpisodesUrlPrefix();
    });
