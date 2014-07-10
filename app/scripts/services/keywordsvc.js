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

        var getKeywordsFromText = function (text) {
            return text.match(/\w+/);
        };

        var getKeywords = function () {
            if (keywords === null) {
                keywords = localStorageService.get(keywordsKey);
                keywords = keywords && angular.fromJson(keywords) || {};
            }
            return keywords;
        };
        
        var getKeywordsByTitle = function (title) {
            var keywords = getKeywords()[title];
            return keywords || getKeywordsFromText(title);
        };
        
        var setKeywords = function (title, keywords) {
            getKeywords()[title] = getKeywordsFromText(keywords);
            localStorageService.add(keywordsKey, angular.toJson(keywords));
            keywords = null;
        };

        return {
            getKeywords: getKeywords,
            getKeywordsByTitle: getKeywordsByTitle,
            setKeywords: setKeywords
        };
    });
