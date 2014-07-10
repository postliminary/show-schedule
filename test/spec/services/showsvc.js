'use strict';

describe('Service: showSvc', function () {

  // load the service's module
  beforeEach(module('showScheduleApp'));

  // instantiate service
  var showSvc;
  beforeEach(inject(function (_showSvc_) {
    showSvc = _showSvc_;
  }));

  it('should do something', function () {
    expect(!!showSvc).toBe(true);
  });

});
