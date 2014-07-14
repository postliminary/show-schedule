'use strict';

describe('Service: urlSvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var urlSvc, localStorageService;
    beforeEach(inject(function(_urlSvc_, _localStorageService_) {
        urlSvc = _urlSvc_;
        localStorageService = _localStorageService_;
        localStorageService.clearAll();
    }));

    var testShow = {
        id: 'test',
        title: 'super test title'
    };

    it('should do something', function() {
        expect(!!urlSvc).toBe(true);
    });

    it('should provide a getFindEpisodesUrlPrefix function', function() {
        expect(typeof urlSvc.getFindEpisodesUrlPrefix).toBe('function');
    });

    it('should provide a setFindEpisodesUrlPrefix function', function() {
        expect(typeof urlSvc.setFindEpisodesUrlPrefix).toBe('function');
    });

    it('should provide a getFindEpisodesUrlForShow function', function() {
        expect(typeof urlSvc.getFindEpisodesUrlForShow).toBe('function');
    });

    it('should generate correct default url', function() {
        expect(urlSvc.getFindEpisodesUrlForShow(testShow)).toBe('http://www.google.com/search?q=episodes+super+test+title');
    });

    it('should set new url and use in subsequent requests', function() {
        var testUrl = 'www.example.com/?q=';
        expect(urlSvc.getFindEpisodesUrlPrefix()).not.toBe(testUrl);
        urlSvc.setFindEpisodesUrlPrefix(testUrl);
        expect(urlSvc.getFindEpisodesUrlPrefix()).toBe(testUrl);
        expect(urlSvc.getFindEpisodesUrlForShow(testShow)).toBe('www.example.com/?q=super+test+title');
    });
});
