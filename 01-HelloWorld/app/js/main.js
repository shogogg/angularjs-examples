var HelloWorld;
(function (HelloWorld) {
    var Controller = (function () {
        function Controller($scope) {
            $scope.name = 'World';
            $scope.greeting = 'Hello';
            $scope.bye = function () {
                return $scope.greeting = 'Good-bye';
            };
        }
        return Controller;
    })();
    HelloWorld.Controller = Controller;    
})(HelloWorld || (HelloWorld = {}));
//@ sourceMappingURL=main.js.map
