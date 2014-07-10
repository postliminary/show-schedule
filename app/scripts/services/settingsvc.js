'use strict';

/**
 * @ngdoc service
 * @name showScheduleApp.settingSvc
 * @description
 * # settingSvc
 * Factory in the showScheduleApp.
 */
angular.module('showScheduleApp')
  .factory('settingSvc', function () {
    // Service logic
    // ...
    //http://www.nyaa.se/?page=search&cats=1_37&filter=0&term=test+baka

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
