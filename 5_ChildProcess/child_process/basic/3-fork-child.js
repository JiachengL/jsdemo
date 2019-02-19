
var fork = require('child_process').fork;

var child = fork(__dirname + '\\timeout.js');

child.on('message', function (data) {
    console.log(`message sent is ${data}`);
    child.send({cmd: 'done'});
});

child.send({cmd: 'start', timeout: 500});

