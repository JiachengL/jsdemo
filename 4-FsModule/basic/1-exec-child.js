const exec = require('child_process').exec;

// run updatime unix function 
// ie. pipe => updatime | cut -d "," -f 1
let child = exec('uptime', function(err, stdout, stderr) {

    if(err)
        // throw error, with invalid unix command
        console.log(`Error: ${stderr}`);
    else
        //  console log the output of the command or error
        console.log(`Output: ${stdout}`);
});

console.log(`Child process PID: ${child.pid}`);