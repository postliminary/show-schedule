'use strict';

describe('Service: showSvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var showSvc;

    beforeEach(inject(function(_showSvc_) {
        showSvc = _showSvc_;
    }));

    it('should do something', function() {
        expect(!!showSvc).toBe(true);
    });

    it('should provide a shows property', function() {
        expect(typeof showSvc.getShows).toBe('function');
    });

    it('should return an array of shows', function() {
        showSvc.getShows().then(function(shows) {
            expect(shows instanceof Array).toBe(true);
            expect(shows.length).toBeGreaterThan(0);
        });
    });
    
    it('should return an object of shows being watched', function() {
        var watchingShows = showSvc.getWatchingShows();
        expect(watchingShows instanceof Object).toBe(true);
    });
    
    it('should add show to not watching', function() {
        var id = "test1"
        var watchingShows = showSvc.getWatchingShows();
        expect(watchingShows[id]).not.toBeDefined();
        showSvc.notWatchShow(id);
        watchingShows = showSvc.getWatchingShows();
        expect(watchingShows[id]).toBe(false);
    });
    
    it('should remove show from not watching', function() {
        var id = "test2"
        showSvc.watchShow(id);
        var watchingShows = showSvc.getWatchingShows();
        expect(watchingShows[id]).toBe(true);
    });
});
