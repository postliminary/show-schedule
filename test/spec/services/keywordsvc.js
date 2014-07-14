'use strict';

describe('Service: keywordSvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var $rootScope, keywordSvc, localStorageService;
    beforeEach(inject(function(_$rootScope_, _keywordSvc_, _localStorageService_) {
        $rootScope = _$rootScope_;
        keywordSvc = _keywordSvc_;
        localStorageService = _localStorageService_;
        localStorageService.clearAll();
    }));

    var testShow = {
        id: 'testkeywordsvc',
        title: 'super test title'
    };

    it('should do something', function() {
        expect(!!keywordSvc).toBe(true);
    });

    it('should provide a getKeywords function', function() {
        expect(typeof keywordSvc.getKeywords).toBe('function');
    });

    it('should provide a setKeywords function', function() {
        expect(typeof keywordSvc.setKeywords).toBe('function');
    });

    it('should provide a onSetKeywords function', function() {
        expect(typeof keywordSvc.onSetKeywords).toBe('function');
    });

    it('should provide a getKeywordsByShow function', function() {
        expect(typeof keywordSvc.getKeywordsByShow).toBe('function');
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

    it('should broadcast set keywords action', function() {
        spyOn($rootScope, '$broadcast');
        keywordSvc.setKeywords('x', 'test key me');
        expect($rootScope.$broadcast).toHaveBeenCalledWith('setKeywords', {
            id: 'x',
            keywords: 'test key me'
        });
    });
});
