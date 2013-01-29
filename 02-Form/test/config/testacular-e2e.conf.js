basePath = '../../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/*.js'
];

autoWatch = false;

browsers = ['PhantomJS'];

reporters = ['progress', 'junit'];

singleRun = true;

proxies = {
  '/': 'http://localhost:8000/'
};

junitReporter = {
  outputFile: 'test_results/e2e.xml',
  suite: 'e2e'
};
