'use strict';

/**
 * @ngdoc service
 * @name showScheduleApp.showSvc
 * @description
 * # showSvc
 * Factory in the showScheduleApp.
 */
angular.module('showScheduleApp')
  .factory('showSvc', function ($http, localStorageService) {
    var shows = null;
    
    var getShows = function () {
      if (shows === null) {
        $http.get('data/shows.json').success(function(data) {
            shows = data;
        });
      }
      return shows;
    };

    // Public API here
    return {
      getShows: getShows
    };
  });
