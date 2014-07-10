'use strict';

describe('Service: keywordSvc', function () {

  // load the service's module
  beforeEach(module('showScheduleApp'));

  // instantiate service
  var keywordSvc;
  beforeEach(inject(function (_keywordSvc_) {
    keywordSvc = _keywordSvc_;
  }));

  it('should do something', function () {
    expect(!!keywordSvc).toBe(true);
  });

});
