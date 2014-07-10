'use strict';

describe('Controller: ShowsCtrl', function() {

    // load the controller's module
    beforeEach(module('showScheduleApp'));

    var ShowsCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(
        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ShowsCtrl = $controller('ShowsCtrl', {
                $scope: scope
            });
        })
    );

    it('should attach a list of shows to the scope', function() {
        expect(scope.shows.length).toBeGreaterThan(1);
    });
});
