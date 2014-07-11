'use strict';

describe('Service: showSvc', function() {

    // load the service's module
    beforeEach(module('showScheduleApp'));

    // instantiate service
    var showSvc, $httpBackend, appConfig;
    
    var sample = '[{\
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

    beforeEach(inject(function(_showSvc_, _$httpBackend_, _appConfig_) {
        showSvc = _showSvc_;
        $httpBackend = _$httpBackend_;
        appConfig = _appConfig_;
    }));

    it('should do something', function() {
        expect(!!showSvc).toBe(true);
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

    it('should return an object of shows being watched', function() {
        var watchingShows = showSvc.getWatchingShows();
        expect(watchingShows instanceof Object).toBe(true);
    });

    it('should say show is not watching', function() {
        var id = 'test1';
        var watchingShows = showSvc.getWatchingShows();
        expect(watchingShows[id]).not.toBeDefined();
        showSvc.notWatchShow(id);
        watchingShows = showSvc.getWatchingShows();
        expect(watchingShows[id]).toBe(false);
    });

    it('should say show is watching', function() {
        var id = 'test2';
        showSvc.watchShow(id);
        var watchingShows = showSvc.getWatchingShows();
        expect(watchingShows[id]).toBe(true);
    });
});
