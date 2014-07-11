'use strict';

describe('Controller: ShowsCtrl', function() {

    // load the controller's module
    beforeEach(module('showScheduleApp'));

    var ShowsCtrl, scope, $httpBackend, appConfig, showSvc, airdaySvc;

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

    it('should attach shows to the scope', function() {
        expect(scope.shows.length).toBe(3);
    });

    it('should attach a airdays to the scope', function() {
        expect(scope.airdays.length).toBeGreaterThan(0);
    });
    
    it('should attach query to the scope', function() {
        expect(scope.query instanceof Object).toBe(true);
        expect(typeof scope.query.airday).toBe('string');
    });
});
