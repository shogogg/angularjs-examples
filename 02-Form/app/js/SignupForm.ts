/// <reference path='../../lib/angularjs/angular.d.ts' />
/// <reference path='SignupForm.Data.ts' />

module SignupForm {
  // Form Model
  export class Model {
    username: string = '';
    password: string = '';
    name: Data.StructuredName = new Data.StructuredName();
    email: string = '';
    url: string = '';
    phone: Data.Phone[] = [new Data.Phone()];
    lang: Data.Lang = null;
    color: Data.Color = Data.Color.YELLOW;
    ballGame: Data.BallGame = new Data.BallGame();
  }

  // Form Scope
  export interface Scope extends ng.IScope {
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

  // Form Controller
  export class Controller {
    constructor($scope: Scope, $window: Window) {
      var data: Model = new Model(),
          name: Data.StructuredName = data.name;

      $scope.data = data;
      $scope.phoneTypes = Data.PhoneTypes;
      $scope.langs = Data.Langs;
      $scope.colors = Data.Colors;
      $scope.ballGames = Data.BallGames;
      $scope.passwordVisible = false;

      $scope.addPhone = () => {
        data.phone.push(new Data.Phone());
      };
      $scope.removePhone = (index: number) => {
        data.phone.splice(index, 1);
      };
      $scope.textOrPassword = () => {
        return $scope.passwordVisible ? 'text' : 'password';
      };
      $scope.dataAsPrettyJson = () => {
        return JSON.stringify(data, undefined, 2);
      };
      $scope.submit = () => {
        var msg = 'ドーモ。'
          + data.name.phoneticLastName
          + data.name.phoneticFirstName + '＝サン。';
        $window.alert(msg);
      };
    }
  }
}
