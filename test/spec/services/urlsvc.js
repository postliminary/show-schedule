'use strict';

describe('Service: urlSvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var urlSvc;
    beforeEach(inject(function(_urlSvc_) {
        urlSvc = _urlSvc_;
    }));

    var testShow = {
        id: 'test',
        title: 'super test title'
    };

    it('should do something', function() {
        expect(!!urlSvc).toBe(true);
    });

    it('should generate correct default url', function() {
        expect(urlSvc.getFindEpisodesUrlForShow(testShow)).toBe('www.google.com/search?q=episodes+super+test+title');
    });

    it('should set new url and use in subsequent requests', function() {
        var testUrl = 'www.example.com/?q=';
        expect(urlSvc.getFindEpisodesUrlPrefix()).not.toBe(testUrl);
        urlSvc.setFindEpisodesUrlPrefix(testUrl);
        expect(urlSvc.getFindEpisodesUrlPrefix()).toBe(testUrl);
        expect(urlSvc.getFindEpisodesUrlForShow(testShow)).toBe('www.example.com/?q=super+test+title');
    });
});
