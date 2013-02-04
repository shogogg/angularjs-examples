/// <reference path="../../lib/jasmine/jasmine.d.ts" />
/// <reference path="../../lib/angularjs/angular.d.ts" />
/// <reference path="../../lib/angularjs/angular-mocks.d.ts" />
/// <reference path="../../app/js/main.d.ts" />
describe('SignupForm', () => {
  var $rootScope: ng.IRootScopeService,
      $controller: ng.IControllerService,
      $window: ng.IWindowService,
      lastAlert: string = '',
      controller: SignupForm.Controller,
      scope: SignupForm.Scope,
      data: SignupForm.Model;

  beforeEach(inject(($injector: ng.auto.IInjectorService) => {
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    $window = $injector.get('$window');
    $window.alert = (msg?: string) => { lastAlert = msg; }
    scope = <SignupForm.Scope>$rootScope.$new();
    controller = $controller(SignupForm.Controller, {
      '$scope': scope,
      '$window': $window
    });
    data = scope.data;
  }));

  describe('Controller', () => {
    it('initialize scope', () => {
      expect(scope.data).toEqual(new SignupForm.Model());
      expect(scope.phoneTypes).toEqual(SignupForm.Data.PhoneTypes);
      expect(scope.langs).toEqual(SignupForm.Data.Langs);
      expect(scope.colors).toEqual(SignupForm.Data.Colors);
      expect(scope.ballGames).toEqual(SignupForm.Data.BallGames);
      expect(scope.passwordVisible).toEqual(false);
    });
  });

  describe('Scope', () => {
    it('.addPhone() should add a element onto the end of .data.phone', () => {
      scope.data.phone = [];
      scope.addPhone();
      expect(scope.data.phone.length).toEqual(1);
      expect(scope.data.phone[0]).toEqual(new SignupForm.Data.Phone());
    });

    it('.removePhone(x) should erase .data.phone[x]', () => {
      scope.data.phone[0] = null;
      scope.addPhone();
      expect(scope.data.phone).toEqual([null, new SignupForm.Data.Phone()]);
      scope.removePhone(1);
      expect(scope.data.phone).toEqual([null]);
    });
    
    it('.textOrPassword() should returns "text" when .passwordVisible == true', () => {
      scope.passwordVisible = true;
      expect(scope.textOrPassword()).toEqual('text');
    });
    
    it('.textOrPassword() should returns "password" when .passwordVisible == false', () => {
      scope.passwordVisible = false;
      expect(scope.textOrPassword()).toEqual('password');
    });

    it('.dataAsPrettyJson() should returns .data as pretty JSON string', () => {
      var json = JSON.stringify(scope.data, undefined, 2);
      expect(scope.dataAsPrettyJson()).toEqual(json);
    });

    it('.submit() should be aisatsu using $window.alert()', () => {
      data.name.phoneticLastName = 'ヤマダ';
      data.name.phoneticFirstName = 'タロウ';
      scope.submit();
      expect(lastAlert).toEqual('ドーモ。ヤマダタロウ＝サン。');
    });
  });
});
