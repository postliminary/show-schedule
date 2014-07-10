'use strict';

describe('Service: urlSvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var urlSvc;
    beforeEach(inject(function(_urlSvc_) {
        urlSvc = _urlSvc_;
    }));

    it('should do something', function() {
        expect(!!urlSvc).toBe(true);
    });
    
    it('should generate correct url', function() {
        var testShow = { id:'test', title:'super test title' };
        expect(urlSvc.getFindEpisodesUrlForShow(testShow)).toBe('www.google.com/search?q=super+test+title');
    });
});
