'use strict';

/**
 * @ngdoc service
 * @name showScheduleApp.navSvc
 * @description
 * # navSvc
 * Factory in the showScheduleApp.
 */
angular.module('showScheduleApp')
    .factory('navSvc', function($rootScope, $location, airdaySvc) {
        // Simple position flags
        var position = {
            settings: false,
            editing: false,
            shows: false
        };

        var updateFlags = function() {
            position.settings = $location.path() === '/settings';
            position.editing = $location.path() === '/shows/edit';
            position.shows = $location.path() === '/shows';
        };

        $rootScope.$on('$routeChangeSuccess', updateFlags);

        updateFlags();

        // Airday selection
        var SELECTED_AIRDAY = 'selectedAirday';

        var selectedAirday = airdaySvc.getToday();

        var getSelectedAirday = function() {
            return selectedAirday;
        };

        var selectAirday = function(airday) {
            // Validate selection
            selectedAirday = airdaySvc.getByValue(airday.value);
            // Boradcast event
            $rootScope.$broadcast(SELECTED_AIRDAY, {
                selected: selectedAirday
            });
        };

        var onSelectAirday = function($scope, handler) {
            $scope.$on(SELECTED_AIRDAY, function(event, message) {
                handler(message);
            });
        };

        return {
            position: position,
            getSelectedAirday: getSelectedAirday,
            selectAirday: selectAirday,
            onSelectAirday: onSelectAirday
        };
    });
