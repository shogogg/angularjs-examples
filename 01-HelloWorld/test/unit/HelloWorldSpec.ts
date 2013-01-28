/// <reference path="../../lib/jasmine/jasmine.d.ts" />
/// <reference path="../../lib/angularjs/angular.d.ts" />
/// <reference path="../../lib/angularjs/angular-mocks.d.ts" />
/// <reference path="../../app/js/main.d.ts" />
describe('HelloWorld', () => {
  var $rootScope: ng.IRootScopeService,
      $controller: ng.IControllerService,
      controller: HelloWorld.Controller,
      scope: HelloWorld.Scope;

  beforeEach(inject(($injector: ng.auto.IInjectorService) => {
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    scope = <HelloWorld.Scope>$rootScope.$new();
    controller = $controller(HelloWorld.Controller, {'$scope': scope});
  }));

  describe('Controller', () => {
    it('initialize scope', () => {
      expect(scope.greeting).toEqual('Hello');
      expect(scope.name).toEqual('World');
      expect(typeof scope.bye).toBe('function');
    });
  });

  describe('Scope', () => {
    it('.greeting should be "Good-bye" when called bye()', () => {
      scope.bye();
      expect(scope.greeting).toEqual('Good-bye');
    });
  });
});
