describe('SignupForm', function () {
    var $rootScope, $controller, $window, lastAlert = '', controller, scope, data;
    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        $window = $injector.get('$window');
        $window.alert = function (msg) {
            lastAlert = msg;
        };
        scope = $rootScope.$new();
        controller = $controller(SignupForm.Controller, {
            '$scope': scope,
            '$window': $window
        });
        data = scope.data;
    }));
    describe('Controller', function () {
        it('initialize scope', function () {
            expect(scope.data).toEqual(new SignupForm.Model());
            expect(scope.phoneTypes).toEqual(SignupForm.Data.PhoneTypes);
            expect(scope.langs).toEqual(SignupForm.Data.Langs);
            expect(scope.colors).toEqual(SignupForm.Data.Colors);
            expect(scope.ballGames).toEqual(SignupForm.Data.BallGames);
            expect(scope.passwordVisible).toEqual(false);
        });
    });
    describe('Scope', function () {
        it('.addPhone() should add a element onto the end of .data.phone', function () {
            scope.data.phone = [];
            scope.addPhone();
            expect(scope.data.phone.length).toEqual(1);
            expect(scope.data.phone[0]).toEqual(new SignupForm.Data.Phone());
        });
        it('.removePhone(x) should erase .data.phone[x]', function () {
            scope.data.phone[0] = null;
            scope.addPhone();
            expect(scope.data.phone).toEqual([
                null, 
                new SignupForm.Data.Phone()
            ]);
            scope.removePhone(1);
            expect(scope.data.phone).toEqual([
                null
            ]);
        });
        it('.textOrPassword() should returns "text" when .passwordVisible == true', function () {
            scope.passwordVisible = true;
            expect(scope.textOrPassword()).toEqual('text');
        });
        it('.textOrPassword() should returns "password" when .passwordVisible == false', function () {
            scope.passwordVisible = false;
            expect(scope.textOrPassword()).toEqual('password');
        });
        it('.dataAsPrettyJson() should returns .data as pretty JSON string', function () {
            var json = JSON.stringify(scope.data, undefined, 2);
            expect(scope.dataAsPrettyJson()).toEqual(json);
        });
        it('.submit() should be aisatsu using $window.alert()', function () {
            data.name.phoneticLastName = 'ヤマダ';
            data.name.phoneticFirstName = 'タロウ';
            scope.submit();
            expect(lastAlert).toEqual('ドーモ。ヤマダタロウ＝サン。');
        });
    });
});
//@ sourceMappingURL=SignupFormSpec.js.map
