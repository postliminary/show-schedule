'use strict';

describe('Service: airdaySvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var airdaySvc;
    beforeEach(inject(function(_airdaySvc_) {
        airdaySvc = _airdaySvc_;
    }));

    var expectedValues = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun', 'none'];

    it('should do something', function() {
        expect(!!airdaySvc).toBe(true);
    });

    it('should return an array of airdays', function() {
        var airdays = airdaySvc.getAirdays();
        expect(airdays instanceof Array).toBe(true);
        expect(airdays.length).toBeGreaterThan(0);
    });

    it('should return todays airday object', function() {
        var today = airdaySvc.getToday();
        expect(today instanceof Object).toBe(true);
        expect(typeof today.value).toBe('string');
        expect(typeof today.name).toBe('string');
        expect(typeof today.sym).toBe('string');
    });

    it('should return expected airday objects', function() {
        for (var i = 0; i < expectedValues.length; i++) {
            expect(airdaySvc.getByValue(expectedValues[i]).value).toBe(expectedValues[i]);
        }
    });

    it('should return valid airday value for unknown value', function() {
        var unknown = airdaySvc.getByValue('q');
        expect(expectedValues.indexOf(unknown.value)).toBeGreaterThan(-1);
    });
});
