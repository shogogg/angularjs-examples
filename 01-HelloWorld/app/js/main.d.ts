module HelloWorld {
    interface Scope extends ng.IScope {
        name: string;
        greeting: string;
        bye: () => void;
    }
    class Controller {
        constructor ($scope: Scope);
    }
}
