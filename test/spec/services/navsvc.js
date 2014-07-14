'use strict';

describe('Service: navSvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var navSvc, $rootScope;
    beforeEach(inject(function(_navSvc_, _$rootScope_) {
        navSvc = _navSvc_;
        $rootScope = _$rootScope_;
    }));

    var expectedValues = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun', 'none'];
    var testShow = {
        id: "testnavsvc"
    }

    it('should provide a position property', function() {
        expect(navSvc.position instanceof Object).toBe(true);
        expect(navSvc.position.settings).toBeDefined();
        expect(navSvc.position.editing).toBeDefined();
        expect(navSvc.position.shows).toBeDefined();
    });

    it('should provide a getSelectedAirday function', function() {
        expect(typeof navSvc.getSelectedAirday).toBe('function');
    });

    it('should provide a selectAirday function', function() {
        expect(typeof navSvc.selectAirday).toBe('function');
    });

    it('should provide a onSelectAirday function', function() {
        expect(typeof navSvc.onSelectAirday).toBe('function');
    });

    it('should provide a editKeywords function', function() {
        expect(typeof navSvc.editKeywords).toBe('function');
    });

    it('should provide a onEditKeywords function', function() {
        expect(typeof navSvc.onEditKeywords).toBe('function');
    });

    it('should return default selected airday object', function() {
        var today = navSvc.getSelectedAirday();
        expect(today instanceof Object).toBe(true);
        expect(typeof today.value).toBe('string');
        expect(typeof today.name).toBe('string');
        expect(typeof today.sym).toBe('string');
    });

    it('should return expected airday objects', function() {
        for (var i = 0; i < expectedValues.length; i++) {
            navSvc.selectAirday({
                value: expectedValues[i]
            });
            var airday = navSvc.getSelectedAirday();
            expect(airday.value).toBe(expectedValues[i]);
        }
    });

    it('should return default airday value for unknown value', function() {
        navSvc.selectAirday({
            value: 'q'
        });
        var unknown = navSvc.getSelectedAirday();
        expect(expectedValues.indexOf(unknown.value)).toBeGreaterThan(-1);
    });

    it('should broadcast selected airday changes', function() {
        spyOn($rootScope, '$broadcast');
        var airday = navSvc.getSelectedAirday();
        navSvc.selectAirday(airday);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('selectedAirday', {
            selected: airday
        });
    });

    it('should broadcast edit keywords request', function() {
        spyOn($rootScope, '$broadcast');
        navSvc.editKeywords(testShow);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('editKeywords', {
            show: testShow
        });
    });

});
