'use strict';

/**
 * @ngdoc service
 * @name showScheduleApp.keywordSvc
 * @description
 * # keywordSvc
 * Factory in the showScheduleApp.
 */
angular.module('showScheduleApp')
  .factory('keywordSvc', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
