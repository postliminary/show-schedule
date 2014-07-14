'use strict';

/**
 * @ngdoc function
 * @name showScheduleApp.controller:KeywordCtrl
 * @description
 * # KeywordCtrl
 * Controller of the showScheduleApp
 */
angular.module('showScheduleApp')
    .controller('KeywordCtrl', function($scope, keywordSvc, navSvc) {
        var reset = function() {
            $scope.editKeywordsFor = null;
            $scope.keywordsForShow = null;
        };

        $scope.saveKeywordsForShow = function() {
            keywordSvc.setKeywords($scope.editKeywordsFor.id, $scope.keywordsForShow);
            reset();
        };

        navSvc.onEditKeywords($scope, function(message) {
            $scope.editKeywordsFor = message.show;
            $scope.keywordsForShow = keywordSvc.getKeywordsByShow(message.show).join(' ');
        });

        reset();
    });
