'use strict';

describe('Service: settingSvc', function () {

  // load the service's module
  beforeEach(module('showScheduleApp'));

  // instantiate service
  var settingSvc;
  beforeEach(inject(function (_settingSvc_) {
    settingSvc = _settingSvc_;
  }));

  it('should do something', function () {
    expect(!!settingSvc).toBe(true);
  });

});
