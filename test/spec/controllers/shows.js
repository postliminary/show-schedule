'use strict';

describe('Controller: ShowsCtrl', function() {

    // load the controller's module
    beforeEach(module('showScheduleApp'));

    var ShowsCtrl, scope, $httpBackend, appConfig, showSvc, airdaySvc;

    var testShow = {
        id: 'testshowscrtl',
        title: 'super test title'
    };

    // Initialize the controller and a mock scope
    beforeEach(
        inject(function($controller, $rootScope, _$httpBackend_, _appConfig_, _showSvc_, _airdaySvc_) {
            $httpBackend = _$httpBackend_;
            appConfig = _appConfig_;
            showSvc = _showSvc_;
            airdaySvc = _airdaySvc_;
            scope = $rootScope.$new();

            // Alter ShowSvc.getShows to return immediately with dummy data
            $httpBackend.when("GET", appConfig.showsResource).respond('[{},{},{}]');

            ShowsCtrl = $controller('ShowsCtrl', {
                $scope: scope
            });

            $httpBackend.flush();
        })
    );

    it('should provide a shows property', function() {
        expect(scope.shows instanceof Array).toBe(true);
        expect(scope.shows.length).toBe(3);
    });

    it('should provide a airdays property', function() {
        expect(scope.shows instanceof Array).toBe(true);
        expect(scope.airdays.length).toBeGreaterThan(0);
    });

    it('should provide a query property', function() {
        expect(scope.query instanceof Object).toBe(true);
        expect(typeof scope.query.airday).toBe('string');
    });

    it('should provide a position property', function() {
        expect(scope.position instanceof Object).toBe(true);
        expect(scope.position.editing).toBeDefined();
    });

    it('should provide a urlForShow function', function() {
        expect(typeof scope.urlForShow).toBe('function');
    });

    it('should provide a isWatchingShow function', function() {
        expect(typeof scope.isWatchingShow).toBe('function');
    });

    it('should provide a watchShow function', function() {
        expect(typeof scope.watchShow).toBe('function');
    });

    it('should provide a dontWatchShow function', function() {
        expect(typeof scope.dontWatchShow).toBe('function');
    });

    it('should provide a editKeywords function', function() {
        expect(typeof scope.editKeywords).toBe('function');
    });
});
