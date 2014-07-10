'use strict';

/**
 * @ngdoc service
 * @name showScheduleApp.showSvc
 * @description
 * # showSvc
 * Factory in the showScheduleApp.
 */
angular.module('showScheduleApp')
    .factory('showSvc', function($http, localStorageService) {
        var shows = null;
        
        var watchingShowsKey = 'notWatchedShows';
        var watchingShows = null;

        var getShows = function() {
            if (shows === null) {
                $http.get('data/shows.json').success(function(data) {
                    shows = data;
                });
            }
            return shows;
        };
        
        var getWatchingShows = function() {
            if (watchingShows === null) {
                watchingShows = localStorageService.get(watchingShowsKey);
                watchingShows = watchingShows && angular.fromJson(watchingShows) || {};
            }
            return watchingShows;
        };
        
        var saveWatchingShows = function() {
            localStorageService.add(watchingShowsKey, angular.toJson(watchingShows));
        };
        
        var watchShow = function (title) {
            getWatchingShows()[title] = true;
            saveWatchingShows();
        };
        
        var notWatchShow = function (title) {
            getWatchingShows()[title] = false;
            saveWatchingShows();
        };

        return {
            getShows: getShows,
            getWatchingShows: getWatchingShows,
            watchShow: watchShow,
            notWatchShow: notWatchShow
        };
    });
