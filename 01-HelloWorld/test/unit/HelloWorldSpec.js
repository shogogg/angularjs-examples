describe('HelloWorld', function () {
    var $rootScope, $controller, controller, scope;
    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        scope = $rootScope.$new();
        controller = $controller(HelloWorld.Controller, {
            '$scope': scope
        });
    }));
    describe('Controller', function () {
        it('initialize scope', function () {
            expect(scope.greeting).toEqual('Hello');
            expect(scope.name).toEqual('World');
            expect(typeof scope.bye).toBe('function');
        });
    });
    describe('Scope', function () {
        it('.greeting should be "Good-bye" when called bye()', function () {
            scope.bye();
            expect(scope.greeting).toEqual('Good-bye');
        });
    });
});
//@ sourceMappingURL=HelloWorldSpec.js.map
