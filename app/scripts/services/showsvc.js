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

        var watchlistKey = 'notWatchedShows';
        var watchlist = null;

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

        var getCurrentlyWatching = function() {
            var defer = $q.defer();

            getShows().then(function(shows) {
                var watching = [];
                for (var i = 0; i < shows.length; i++) {
                    if (isWatchingShow(shows[i].id)) {
                        watching.push(shows[i]);
                    }
                }
                defer.resolve(watching);
            });

            return defer.promise;
        };

        var getWatchlist = function() {
            if (watchlist === null) {
                watchlist = localStorageService.get(watchlistKey);
                watchlist = watchlist && angular.fromJson(watchlist) || {};
            }
            return watchlist;
        };

        var isWatchingShow = function(id) {
            return getWatchlist()[id] !== false;
        };

        var saveWatchingShows = function() {
            localStorageService.add(watchlistKey, angular.toJson(watchlist));
            watchlist = null;
        };

        var watchShow = function(id) {
            getWatchlist()[id] = true;
            saveWatchingShows();
        };

        var dontWatchShow = function(id) {
            getWatchlist()[id] = false;
            saveWatchingShows();
        };

        return {
            getShows: getShows,
            getCurrentlyWatching: getCurrentlyWatching,
            isWatchingShow: isWatchingShow,
            watchShow: watchShow,
            dontWatchShow: dontWatchShow
        };
    });
