'use strict';

describe('Controller: ShowListCtrl', function () {

  // load the controller's module
  beforeEach(module('showScheduleApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('ShowListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of shows to the scope', function () {
    expect(scope.shows.length).toBeGreaterThan(1);
  });
});
