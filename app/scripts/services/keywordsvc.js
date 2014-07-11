'use strict';

/**
 * @ngdoc service
 * @name showScheduleApp.keywordSvc
 * @description
 * # keywordSvc
 * Factory in the showScheduleApp.
 */
angular.module('showScheduleApp')
    .factory('keywordSvc', function(localStorageService) {
        var keywordsKey = 'keywords';
        var keywords = null;

        var getKeywordsFromText = function(text) {
            return text.match(/[A-Za-z0-9]+/g);
        };

        var getKeywords = function() {
            if (keywords === null) {
                keywords = localStorageService.get(keywordsKey);
                keywords = keywords || {};
            }
            return keywords;
        };

        var getKeywordsByShow = function(show) {
            var keywords = getKeywords()[show.id];
            return keywords || getKeywordsFromText(show.title);
        };

        var setKeywords = function(id, keywords) {
            getKeywords()[id] = getKeywordsFromText(keywords);
            localStorageService.add(keywordsKey, keywords);
            keywords = null;
        };

        return {
            getKeywords: getKeywords,
            getKeywordsByShow: getKeywordsByShow,
            setKeywords: setKeywords
        };
    });
