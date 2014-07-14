'use strict';

describe('Service: showSvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var showSvc, $httpBackend, appConfig, localStorageService;

    var sample = '[{\
                    "id":"test1",\
                    "startdate": "Jan 1, 2000",\
                    "title": "Test Title 1",\
                    "image_urls": ["http://example.com/test1.jpg"],\
                    "images": [{\
                        "url": "http://example.com/test1.jpg",\
                        "path": "full/ffffffffffffffffffffffffffffffff.jpg",\
                        "checksum": "ffffffffffffffffffffffffffffffff"\
                    }],\
                    "airday": "mon",\
                    "desc": "Test show number 1"\
                }, {\
                    "id":"test2",\
                    "startdate": "Jan 1, 2000",\
                    "title": "Test Title 2",\
                    "image_urls": ["http://example.com/test2.jpg"],\
                    "images": [{\
                        "url": "http://example.com/test2.jpg",\
                        "path": "full/ffffffffffffffffffffffffffffffff.jpg",\
                        "checksum": "ffffffffffffffffffffffffffffffff"\
                    }],\
                    "airday": "tue",\
                    "desc": "Test show number 2"\
                }, {\
                    "id":"test3",\
                    "startdate": "Jan 1, 2000",\
                    "title": "Test Title 3",\
                    "image_urls": ["http://example.com/test3.jpg"],\
                    "images": [{\
                        "url": "http://example.com/test3.jpg",\
                        "path": "full/ffffffffffffffffffffffffffffffff.jpg",\
                        "checksum": "ffffffffffffffffffffffffffffffff"\
                    }],\
                    "airday": "mon",\
                    "desc": "Test show number 3"\
                }]';

    beforeEach(inject(function(_showSvc_, _$httpBackend_, _appConfig_, _localStorageService_) {
        showSvc = _showSvc_;
        $httpBackend = _$httpBackend_;
        appConfig = _appConfig_;
        localStorageService = _localStorageService_;
        localStorageService.clearAll();
    }));

    it('should do something', function() {
        expect(!!showSvc).toBe(true);
    });

    it('should provide a getShows function', function() {
        expect(typeof showSvc.getShows).toBe('function');
    });

    it('should provide a getCurrentlyWatching function', function() {
        expect(typeof showSvc.getCurrentlyWatching).toBe('function');
    });

    it('should provide a isWatchingShow function', function() {
        expect(typeof showSvc.isWatchingShow).toBe('function');
    });

    it('should provide a watchShow function', function() {
        expect(typeof showSvc.watchShow).toBe('function');
    });

    it('should provide a dontWatchShow function', function() {
        expect(typeof showSvc.dontWatchShow).toBe('function');
    });

    it('should return an array of shows', function() {
        $httpBackend.when("GET", appConfig.reportUrl).respond(sample);

        var shows;
        showSvc.getShows().then(function(data) {
            shows = data;
        });

        $httpBackend.flush();

        expect(shows instanceof Array).toBe(true);
        expect(shows.length).toBeGreaterThan(0);
        // Test structure of first object
        var show = shows[0];
        expect(show instanceof Object).toBe(true);
        expect(typeof show.title).toBe('string');
        expect(typeof show.airday).toBe('string');
        expect(show.images instanceof Array).toBe(true);
    });

    it('should return an array of shows being watched', function() {
        $httpBackend.when("GET", appConfig.reportUrl).respond(sample);

        var watchingShows;
        showSvc.getCurrentlyWatching().then(function(data) {
            watchingShows = data;
        });

        $httpBackend.flush();

        expect(watchingShows instanceof Array).toBe(true);
    });

    it('should toggle show is watching / not watching', function() {
        var id = 'test1';
        expect(showSvc.isWatchingShow(id)).toBe(true);
        showSvc.dontWatchShow(id);
        expect(showSvc.isWatchingShow(id)).toBe(false);
        showSvc.watchShow(id);
        expect(showSvc.isWatchingShow(id)).toBe(true);
    });
});
