var connect = require('connect'),
    host = 'localhost',
    port = 8000;
require('start-stop-daemon')(function() {
  connect(connect.static(__dirname)).listen(port, host);
}).on('start', function() {
  console.log('App: http://' + host + ':' + port + '/app/');
  console.log('End-to-End Test: http://' + host + ':' + port + '/test/e2e/runner.html');
});
