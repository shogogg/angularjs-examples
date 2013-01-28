/// <reference path="../../lib/angularjs/angular.d.ts" />
module HelloWorld {
  export interface Scope extends ng.IScope {
    name: string;
    greeting: string;
    bye: () => void;
  }
  export class Controller {
    constructor($scope: Scope) {
      $scope.name = 'World';
      $scope.greeting = 'Hello';
      $scope.bye = () => $scope.greeting = 'Good-bye';
    }
  }
}
