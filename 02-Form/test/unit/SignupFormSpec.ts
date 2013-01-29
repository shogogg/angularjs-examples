/// <reference path="../../lib/jasmine/jasmine.d.ts" />
/// <reference path="../../lib/angularjs/angular.d.ts" />
/// <reference path="../../lib/angularjs/angular-mocks.d.ts" />
/// <reference path="../../app/js/main.d.ts" />
describe('SignupForm', () => {
  var $rootScope: ng.IRootScopeService,
      $controller: ng.IControllerService,
      controller: SignupForm.Controller,
      scope: SignupForm.Scope;

  beforeEach(inject(($injector: ng.auto.IInjectorService) => {
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    scope = <SignupForm.Scope>$rootScope.$new();
    controller = $controller(SignupForm.Controller, {'$scope': scope});
  }));

  describe('Controller', () => {
    it('initialize scope', () => {
    });
  });
});
