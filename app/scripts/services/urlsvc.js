'use strict';

/**
 * @ngdoc service
 * @name showScheduleApp.urlSvc
 * @description
 * # urlSvc
 * Factory in the showScheduleApp.
 */
angular.module('showScheduleApp')
    .factory('urlSvc', function(appConfig, keywordSvc, localStorageService) {
        var findEpisodesUrlPrefixKey = 'findEpisodesUrlPrefix';
        var findEpisodesUrlPrefix = null;

        var getFindEpisodesUrlPrefix = function() {
            if (findEpisodesUrlPrefix === null) {
                findEpisodesUrlPrefix = localStorageService.get(findEpisodesUrlPrefixKey);
                findEpisodesUrlPrefix = findEpisodesUrlPrefix || appConfig.findEpisodesUrlPrefixDefault;
            }
            return findEpisodesUrlPrefix;
        };
        
        var setFindEpisodesUrlPrefix = function(prefix) {
            localStorageService.add(findEpisodesUrlPrefixKey, angular.toJson(prefix));
            findEpisodesUrlPrefix = null;
        }

        var getFindEpisodesUrlForShow = function(show) {
            return getFindEpisodesUrlPrefix() + keywordSvc.getKeywordsByShow(show).join('+');
        };

        return {
            getFindEpisodesUrlPrefix: getFindEpisodesUrlPrefix,
            getFindEpisodesUrlForShow: getFindEpisodesUrlForShow,
            setFindEpisodesUrlPrefix: setFindEpisodesUrlPrefix,
        };
    });
