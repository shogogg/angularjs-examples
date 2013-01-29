module SignupForm.Data {
  export interface Pair {
    id: number;
    label: string;
  }
  function pair(id, label) {
    return {id: id, label: label};
  }
  export class StructuredName {
    firstName: string = '';
    lastName: string = '';
    phoneticFirstName: string = '';
    phoneticLastName: string = '';
  }
  export enum PhoneType {
    HOME = 1000,
    OFFICE = 2000,
    MOBILE = 3000,
    OTHER = 9999
  }
  export var PhoneTypes = [
    pair(PhoneType.HOME, '自宅'),
    pair(PhoneType.OFFICE, '勤務先'),
    pair(PhoneType.MOBILE, '携帯電話'),
    pair(PhoneType.OTHER, 'その他')
  ];
  export class Phone {
    number: string = '';
    type: PhoneType = PhoneType.OTHER;
  }
  export enum Lang {
    C = 1000,
    CPP = 1100,
    OBJECTIVE_C = 1200,
    BASIC = 2000,
    JAVA = 3000,
    SCALA = 3100,
    PERL = 4000,
    RUBY = 4100,
    PYTHON = 4200,
    JAVASCRIPT = 5000,
    TYPESCRIPT = 5100,
    COFFEE = 5200,
    OTHERS = 9999
  }
  export var Langs = [
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
  export enum Color {
    RED = 1000,
    YELLOW = 2000,
    PINK = 3000,
    GREEN = 4000,
    PURPLE = 5000
  }
  export var Colors = [
    pair(Color.RED, '赤'),
    pair(Color.YELLOW, '黄色'),
    pair(Color.PINK, 'ピンク'),
    pair(Color.GREEN, '緑'),
    pair(Color.PURPLE, '紫')
  ];
  export class BallGame {
    baseball: bool = false;
    football: bool = false;
    basketball: bool = false;
    volleyball: bool = false;
    others: bool = false;
  }
  export var BallGames = [
    pair('baseball', '野球'),
    pair('football', 'サッカー'),
    pair('basketball', 'バスケットボール'),
    pair('volleyball', 'バレーボール'),
    pair('others', 'その他')
  ];
}