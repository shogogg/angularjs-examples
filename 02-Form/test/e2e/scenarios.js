describe('HelloWorld', function() {
  beforeEach(function() {
    browser().navigateTo('../../app/');
  });
  it('should change the binding when user enters text', function() {
    expect(binding('name')).toEqual('World');
    input('name').enter('AngularJS');
    expect(binding('name')).toEqual('AngularJS');
  });
});
