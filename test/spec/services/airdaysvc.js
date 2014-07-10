'use strict';

describe('Service: airdaySvc', function () {

  // load the service's module
  beforeEach(module('showScheduleApp'));

  // instantiate service
  var airdaySvc;
  beforeEach(inject(function (_airdaySvc_) {
    airdaySvc = _airdaySvc_;
  }));

  it('should do something', function () {
    expect(!!airdaySvc).toBe(true);
  });

});
