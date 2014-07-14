'use strict';

/**
 * @ngdoc service
 * @name showScheduleApp.keywordSvc
 * @description
 * # keywordSvc
 * Factory in the showScheduleApp.
 */
angular.module('showScheduleApp')
    .factory('keywordSvc', function($rootScope, localStorageService) {
        var keywordsKey = 'keywords';
        var keywordStore = null;

        var getKeywordsFromText = function(text) {
            return text.match(/[A-Za-z0-9]+/g);
        };

        var getKeywords = function() {
            if (keywordStore === null) {
                keywordStore = localStorageService.get(keywordsKey);
                keywordStore = keywordStore || {};
            }
            return keywordStore;
        };

        var getKeywordsByShow = function(show) {
            var keywords = getKeywords()[show.id];
            return keywords || getKeywordsFromText(show.title);
        };

        var SET_KEYWORDS = 'setKeywords';

        var setKeywords = function(id, keywords) {
            getKeywords()[id] = getKeywordsFromText(keywords);
            localStorageService.add(keywordsKey, keywordStore);
            // Broadcast event
            $rootScope.$broadcast(SET_KEYWORDS, {
                id: id,
                keywords: keywords
            });
        };

        var onSetKeywords = function($scope, handler) {
            $scope.$on(SET_KEYWORDS, function(event, message) {
                handler(message);
            });
        };

        return {
            getKeywords: getKeywords,
            getKeywordsByShow: getKeywordsByShow,
            setKeywords: setKeywords,
            onSetKeywords: onSetKeywords
        };
    });
