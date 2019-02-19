
var spawn = require("child_process").spawn,
    ps      = spawn("ps", ['ax']),
    grep    = spawn("grep", ['node']);

// The returned process object will hold a property for 
//each std type represented as a Stream: .stdin - WriteStream, .stout - ReadStream and finally .stderr 
ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on('data', function (data) {
    console.log('ps stderr: ' + data);
});

grep.stderr.on('data', function (data) {
    console.log('grep stderr: ' + data);
});