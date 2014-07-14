'use strict';

describe('Controller: KeywordCtrl', function() {

    // load the controller's module
    beforeEach(module('showScheduleApp'));

    var KeywordCtrl, scope, navSvc, urlSvc;

    var testShow = {
        id: "testkeywordctrl",
        title: "super test title"
    };

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, _navSvc_, _urlSvc_) {
        navSvc = _navSvc_;
        urlSvc = _urlSvc_;
        scope = $rootScope.$new();
        KeywordCtrl = $controller('KeywordCtrl', {
            $scope: scope
        });
    }));

    it('should provide a editKeywordsFor property', function() {
        expect(scope.editKeywordsFor).toBeDefined();
    });

    it('should provide a keywordsForShow property', function() {
        expect(scope.keywordsForShow).toBeDefined();
    });

    it('should provide a saveKeywordsForShow function', function() {
        expect(typeof scope.saveKeywordsForShow).toBe('function');
    });

    it('should return a custom keywords url', function() {
        expect(urlSvc.getFindEpisodesUrlForShow(testShow)).toBe('http://www.google.com/search?q=episodes+super+test+title');
        navSvc.editKeywords(testShow);
        expect(scope.editKeywordsFor).toBe(testShow);
        expect(scope.keywordsForShow).toBe('super test title');
        scope.keywordsForShow = 'cool name';
        scope.saveKeywordsForShow();
        expect(urlSvc.getFindEpisodesUrlForShow(testShow)).toBe('http://www.google.com/search?q=episodes+cool+name');
    });
});
