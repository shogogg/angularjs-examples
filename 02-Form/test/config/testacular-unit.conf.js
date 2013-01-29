basePath = '../../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'lib/angularjs/angular.js',
  'lib/angularjs/angular-mocks.js',
  'app/js/*.js',
  'test/unit/*.js'
];

singleRun = true;

browsers = ['PhantomJS'];

reporters = ['progress', 'junit'];

junitReporter = {
  outputFile: 'test_results/unit.xml',
  suite: 'e2e'
};
