describe('SignupForm', function () {
    var $rootScope, $controller, controller, scope;
    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        scope = $rootScope.$new();
        controller = $controller(SignupForm.Controller, {
            '$scope': scope
        });
    }));
    describe('Controller', function () {
        it('initialize scope', function () {
        });
    });
});
//@ sourceMappingURL=SignupFormSpec.js.map
