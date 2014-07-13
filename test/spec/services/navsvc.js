'use strict';

describe('Service: navSvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var navSvc;
    beforeEach(inject(function(_navSvc_) {
        navSvc = _navSvc_;
    }));

    it('should do something', function() {
        expect(!!navSvc).toBe(true);
    });

});
