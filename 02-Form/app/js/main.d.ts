module SignupForm.Data {
    interface Pair {
        id: number;
        label: string;
    }
    class StructuredName {
        public firstName: string;
        public lastName: string;
        public phoneticFirstName: string;
        public phoneticLastName: string;
    }
    enum PhoneType {
        HOME,
        OFFICE,
        MOBILE,
        OTHER,
    }
    var PhoneTypes: {
        id: any;
        label: any;
    }[];
    class Phone {
        public number: string;
        public type: PhoneType;
    }
    enum Lang {
        C,
        CPP,
        OBJECTIVE_C,
        BASIC,
        JAVA,
        SCALA,
        PERL,
        RUBY,
        PYTHON,
        JAVASCRIPT,
        TYPESCRIPT,
        COFFEE,
        OTHERS,
    }
    var Langs: {
        id: any;
        label: any;
    }[];
    enum Color {
        RED,
        YELLOW,
        PINK,
        GREEN,
        PURPLE,
    }
    var Colors: {
        id: any;
        label: any;
    }[];
    class BallGame {
        public baseball: bool;
        public football: bool;
        public basketball: bool;
        public volleyball: bool;
        public others: bool;
    }
    var BallGames: {
        id: any;
        label: any;
    }[];
}
module SignupForm {
    class Model {
        public username: string;
        public password: string;
        public name: Data.StructuredName;
        public email: string;
        public url: string;
        public phone: Data.Phone[];
        public lang: Data.Lang;
        public color: Data.Color;
        public ballGame: Data.BallGame;
    }
    interface Scope extends ng.IScope {
        data: Model;
        phoneTypes: Data.Pair[];
        langs: Data.Pair[];
        colors: Data.Pair[];
        ballGames: Data.Pair[];
        passwordVisible: bool;
        addPhone(): void;
        removePhone(index: number): void;
        textOrPassword(): string;
        dataAsPrettyJson(): string;
        submit(): void;
    }
    class Controller {
        constructor ($scope: Scope, $window: Window);
    }
}
