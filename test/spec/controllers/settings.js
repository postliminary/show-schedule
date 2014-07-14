'use strict';

describe('Controller: SettingsCtrl', function() {

    // load the controller's module
    beforeEach(module('showScheduleApp'));

    var SettingsCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        SettingsCtrl = $controller('SettingsCtrl', {
            $scope: scope
        });
    }));

    it('should provide a clearData function', function() {
        expect(typeof scope.clearData).toBe('function');
    });

    it('should provide a saveUrlForShowPrefix function', function() {
        expect(typeof scope.saveUrlForShowPrefix).toBe('function');
    });

    it('should provide a urlForShowPrefix property', function() {
        expect(typeof scope.urlForShowPrefix).toBe('string');
    });
});
