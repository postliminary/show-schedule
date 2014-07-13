'use strict';

describe('Controller: ShowsCtrl', function() {

    // load the controller's module
    beforeEach(module('showScheduleApp'));

    var ShowsCtrl, scope, $httpBackend, appConfig, showSvc, airdaySvc;

    var testShow = {
        id: 'test'
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

    it('should provide a findEpisodesFor property', function() {
        expect(scope.query instanceof Object).toBe(true);
        expect(typeof scope.query.airday).toBe('string');
    });

    it('should provide a showsByAirday function', function() {
        expect(typeof scope.showsByAirday).toBe('function');
    });

    it('showsByAirday should change query property', function() {
        expect(scope.query.airday).not.toBe('none');
        scope.showsByAirday('none');
        expect(scope.query.airday).toBe('none');
    });

    it('should provide a popupFindEpisodes function', function() {
        expect(typeof scope.popupFindEpisodes).toBe('function');
    });

    it('popupFindEpisodes should change findEpisodesFor property', function() {
        expect(scope.findEpisodesFor).toBe(null);
        scope.popupFindEpisodes(testShow);
        expect(scope.findEpisodesFor instanceof Object).toBe(true);
    });

    it('should attach a closeFindEpisodes function', function() {
        expect(typeof scope.closeFindEpisodes).toBe('function');
    });

    it('closeFindEpisodes should change findEpisodesFor property', function() {
        scope.popupFindEpisodes(testShow);
        expect(scope.findEpisodesFor instanceof Object).toBe(true);

        scope.closeFindEpisodes(testShow);
        expect(scope.findEpisodesFor).toBe(null);
    });
});
