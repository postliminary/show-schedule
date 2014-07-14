'use strict';

describe('Service: airdaySvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var airdaySvc, $rootScope;
    beforeEach(inject(function(_airdaySvc_, _$rootScope_) {
        airdaySvc = _airdaySvc_;
        $rootScope = _$rootScope_;
    }));

    var expectedValues = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun', 'none'];

    it('should do something', function() {
        expect(!!airdaySvc).toBe(true);
    });

    it('should provide a getAirdays function', function() {
        expect(typeof airdaySvc.getAirdays).toBe('function');
    });

    it('should provide a getToday function', function() {
        expect(typeof airdaySvc.getToday).toBe('function');
    });

    it('should provide a getByValue function', function() {
        expect(typeof airdaySvc.getByValue).toBe('function');
    });

    it('should return an array of airdays', function() {
        var airdays = airdaySvc.getAirdays();
        expect(airdays instanceof Array).toBe(true);
        expect(airdays.length).toBeGreaterThan(0);
    });

    it('should return expected airday objects', function() {
        for (var i = 0; i < expectedValues.length; i++) {
            var airday = airdaySvc.getByValue(expectedValues[i]);
            expect(airday.value).toBe(expectedValues[i]);
        }
    });

    it('should return default airday value for unknown value', function() {
        var unknown = airdaySvc.getByValue('z');
        expect(expectedValues.indexOf(unknown.value)).toBeGreaterThan(-1);
    });
});
