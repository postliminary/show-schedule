'use strict';

describe('Controller: ShowListCtrl', function () {

  // load the controller's module
  beforeEach(module('showScheduleApp'));

  var ShowListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowListCtrl = $controller('ShowListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of shows to the scope', function () {
    expect(scope.shows.length).toBeGreaterThan(1);
  });
});
