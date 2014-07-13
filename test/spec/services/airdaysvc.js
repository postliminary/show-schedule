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

    it('should return an array of airdays', function() {
        var airdays = airdaySvc.getAirdays();
        expect(airdays instanceof Array).toBe(true);
        expect(airdays.length).toBeGreaterThan(0);
    });

    it('should return selected airday object', function() {
        var today = airdaySvc.getSelected();
        expect(today instanceof Object).toBe(true);
        expect(typeof today.value).toBe('string');
        expect(typeof today.name).toBe('string');
        expect(typeof today.sym).toBe('string');
    });

    it('should return expected airday objects', function() {
        for (var i = 0; i < expectedValues.length; i++) {
            airdaySvc.selectAirday({
                value: expectedValues[i]
            });
            var airday = airdaySvc.getSelected();
            expect(airday.value).toBe(expectedValues[i]);
        }
    });

    it('should return default airday value for unknown value', function() {
        airdaySvc.selectAirday({
            value: 'q'
        });
        var unknown = airdaySvc.getSelected();
        expect(expectedValues.indexOf(unknown.value)).toBeGreaterThan(-1);
    });

    it('should broadcast selected airday changes', function() {
        spyOn($rootScope, '$broadcast');
        var airday = airdaySvc.getSelected();
        airdaySvc.selectAirday(airday);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('selectAirday', {
            selected: airday
        });
    });
});
