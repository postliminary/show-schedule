'use strict';

/**
 * @ngdoc service
 * @name showScheduleApp.airdaySvc
 * @description
 * # airdaySvc
 * Factory in the showScheduleApp.
 */
angular.module('showScheduleApp')
  .factory('airdaySvc', function () {
    // Airdays lookup
    var airdays = [
        { sym: '月', name: 'Monday', value: 'mon' },
        { sym: '火', name: 'Tuesday', value: 'tue' },
        { sym: '水', name: 'Wednesday', value: 'wed' },
        { sym: '木', name: 'Thursday', value: 'thr' },
        { sym: '金', name: 'Friday', value: 'fri' },
        { sym: '土', name: 'Saturday', value: 'sat' },
        { sym: '日', name: 'Sunday', value: 'sun' },
        { sym: 'オンライン', name: 'Online', value: 'none' }
    ];
    
    var getToday = function () {
        var d = new Date();
        var n = d.getDay();
        
        //start week on mondays
        if (n === 0) {
            return airdays[6];
        }
        else {
            return airdays[n - 1];
        }
    };
    
    var getByValue = function (value) {
        for (var i = 0; i < airdays.length; i++) {
            if (airdays[i].value === value) {
                return airdays[i];
            }
        }
        return getToday();
    };

    return {
        getAirdays: function () {
            return airdays;
        },
        getToday: getToday,
        getByValue: getByValue
    };
  });
