var SignupForm;
(function (SignupForm) {
    (function (Data) {
        function pair(id, label) {
            return {
                id: id,
                label: label
            };
        }
        var StructuredName = (function () {
            function StructuredName() {
                this.firstName = '';
                this.lastName = '';
                this.phoneticFirstName = '';
                this.phoneticLastName = '';
            }
            return StructuredName;
        })();
        Data.StructuredName = StructuredName;        
        (function (PhoneType) {
            PhoneType._map = [];
            PhoneType.HOME = 1000;
            PhoneType.OFFICE = 2000;
            PhoneType.MOBILE = 3000;
            PhoneType.OTHER = 9999;
        })(Data.PhoneType || (Data.PhoneType = {}));
        var PhoneType = Data.PhoneType;
        Data.PhoneTypes = [
            pair(PhoneType.HOME, '自宅'), 
            pair(PhoneType.OFFICE, '勤務先'), 
            pair(PhoneType.MOBILE, '携帯電話'), 
            pair(PhoneType.OTHER, 'その他')
        ];
        var Phone = (function () {
            function Phone() {
                this.number = '';
                this.type = PhoneType.OTHER;
            }
            return Phone;
        })();
        Data.Phone = Phone;        
        (function (Lang) {
            Lang._map = [];
            Lang.C = 1000;
            Lang.CPP = 1100;
            Lang.OBJECTIVE_C = 1200;
            Lang.BASIC = 2000;
            Lang.JAVA = 3000;
            Lang.SCALA = 3100;
            Lang.PERL = 4000;
            Lang.RUBY = 4100;
            Lang.PYTHON = 4200;
            Lang.JAVASCRIPT = 5000;
            Lang.TYPESCRIPT = 5100;
            Lang.COFFEE = 5200;
            Lang.OTHERS = 9999;
        })(Data.Lang || (Data.Lang = {}));
        var Lang = Data.Lang;
        Data.Langs = [
            pair(Lang.C, 'C'), 
            pair(Lang.CPP, 'C++'), 
            pair(Lang.OBJECTIVE_C, 'Objective-C'), 
            pair(Lang.BASIC, 'Basic'), 
            pair(Lang.JAVA, 'Java'), 
            pair(Lang.SCALA, 'Scala'), 
            pair(Lang.PERL, 'Perl'), 
            pair(Lang.RUBY, 'Ruby'), 
            pair(Lang.PYTHON, 'Python'), 
            pair(Lang.JAVASCRIPT, 'JavaScript'), 
            pair(Lang.TYPESCRIPT, 'TypeScript'), 
            pair(Lang.COFFEE, 'CoffeeScript'), 
            pair(Lang.OTHERS, 'その他')
        ];
        (function (Color) {
            Color._map = [];
            Color.RED = 1000;
            Color.YELLOW = 2000;
            Color.PINK = 3000;
            Color.GREEN = 4000;
            Color.PURPLE = 5000;
        })(Data.Color || (Data.Color = {}));
        var Color = Data.Color;
        Data.Colors = [
            pair(Color.RED, '赤'), 
            pair(Color.YELLOW, '黄色'), 
            pair(Color.PINK, 'ピンク'), 
            pair(Color.GREEN, '緑'), 
            pair(Color.PURPLE, '紫')
        ];
        var BallGame = (function () {
            function BallGame() {
                this.baseball = false;
                this.football = false;
                this.basketball = false;
                this.volleyball = false;
                this.others = false;
            }
            return BallGame;
        })();
        Data.BallGame = BallGame;        
        Data.BallGames = [
            pair('baseball', '野球'), 
            pair('football', 'サッカー'), 
            pair('basketball', 'バスケットボール'), 
            pair('volleyball', 'バレーボール'), 
            pair('others', 'その他')
        ];
    })(SignupForm.Data || (SignupForm.Data = {}));
    var Data = SignupForm.Data;
})(SignupForm || (SignupForm = {}));
var SignupForm;
(function (SignupForm) {
    var Model = (function () {
        function Model() {
            this.username = '';
            this.password = '';
            this.name = new SignupForm.Data.StructuredName();
            this.email = '';
            this.url = '';
            this.phone = [
                new SignupForm.Data.Phone()
            ];
            this.lang = null;
            this.color = SignupForm.Data.Color.YELLOW;
            this.ballGame = new SignupForm.Data.BallGame();
        }
        return Model;
    })();
    SignupForm.Model = Model;    
    var Controller = (function () {
        function Controller($scope, $window) {
            var data = new Model(), name = data.name;
            $scope.data = data;
            $scope.phoneTypes = SignupForm.Data.PhoneTypes;
            $scope.langs = SignupForm.Data.Langs;
            $scope.colors = SignupForm.Data.Colors;
            $scope.ballGames = SignupForm.Data.BallGames;
            $scope.passwordVisible = false;
            $scope.addPhone = function () {
                data.phone.push(new SignupForm.Data.Phone());
            };
            $scope.removePhone = function (index) {
                data.phone.splice(index, 1);
            };
            $scope.textOrPassword = function () {
                return $scope.passwordVisible ? 'text' : 'password';
            };
            $scope.dataAsPrettyJson = function () {
                return JSON.stringify(data, undefined, 2);
            };
            $scope.submit = function () {
                var msg = 'ドーモ。' + data.name.phoneticLastName + data.name.phoneticFirstName + '＝サン。';
                $window.alert(msg);
            };
        }
        return Controller;
    })();
    SignupForm.Controller = Controller;    
})(SignupForm || (SignupForm = {}));
//@ sourceMappingURL=main.js.map
