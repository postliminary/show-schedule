'use strict';

describe('Controller: NavCtrl', function() {

    // load the controller's module
    beforeEach(module('showScheduleApp'));

    var NavCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        NavCtrl = $controller('NavCtrl', {
            $scope: scope
        });
    }));

    it('should provide a onSelectAirday function', function() {
        expect(typeof scope.onSelectAirday).toBe('function');
    });

    it('should provide a selectedAirday property', function() {
        expect(scope.selectedAirday instanceof Object).toBe(true);
        expect(scope.selectedAirday.value).toBeDefined();
    });

    it('should provide a airdays property', function() {
        expect(scope.airdays instanceof Array).toBe(true);
        expect(scope.airdays.length).toBeGreaterThan(0);
    });

    it('should provide a position property', function() {
        expect(scope.position instanceof Object).toBe(true);
        expect(scope.position.settings).toBeDefined();
        expect(scope.position.editing).toBeDefined();
        expect(scope.position.shows).toBeDefined();
    });
});
