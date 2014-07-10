'use strict';

/**
 * @ngdoc service
 * @name showScheduleApp.showSvc
 * @description
 * # showSvc
 * Factory in the showScheduleApp.
 */
angular.module('showScheduleApp')
    .factory('showSvc', function($http, $q, appConfig, localStorageService) {
        var shows = null;

        var watchingShowsKey = 'notWatchedShows';
        var watchingShows = null;

        var getShows = function() {
            if (shows === null) {
                var defer = $q.defer();
                
                $http
                    .get(appConfig.showsResource)
                    .success(function(data) {
                        shows = data;
                        defer.resolve(data);
                    });
                    
                return defer.promise;
            }
            return $q.when(shows);
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
            watchingShows = null;
        };

        var watchShow = function(id) {
            getWatchingShows()[id] = true;
            saveWatchingShows();
        };

        var notWatchShow = function(id) {
            getWatchingShows()[id] = false;
            saveWatchingShows();
        };

        return {
            getShows: getShows,
            getWatchingShows: getWatchingShows,
            watchShow: watchShow,
            notWatchShow: notWatchShow
        };
    });
