'use strict';

describe('Service: keywordSvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var keywordSvc;
    beforeEach(inject(function(_keywordSvc_) {
        keywordSvc = _keywordSvc_;
    }));

    var testShow = {
        id: 'test',
        title: 'super test title'
    };

    it('should do something', function() {
        expect(!!keywordSvc).toBe(true);
    });

    it('should return an map of keywords', function() {
        var keywords = keywordSvc.getKeywords();
        expect(keywords instanceof Object).toBe(true);
    });

    it('should return default keywords', function() {
        var keywords = keywordSvc.getKeywordsByShow(testShow);
        expect(keywords instanceof Array).toBe(true);
        expect(keywords[0]).toBe('super');
        expect(keywords[1]).toBe('test');
        expect(keywords[2]).toBe('title');
    });

    it('should return custom keywords', function() {
        keywordSvc.setKeywords(testShow.id, 'cool name');
        var keywords = keywordSvc.getKeywordsByShow(testShow);
        expect(keywords instanceof Array).toBe(true);
        expect(keywords[0]).toBe('cool');
        expect(keywords[1]).toBe('name');
    });
});
