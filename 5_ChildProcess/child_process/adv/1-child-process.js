
// destructure spawn out of the child_process module
const { spawn } = require('child_process');

//windows EONT error, without the shell option,  
var child = spawn('npm', ['-v'], { shell: true});

child.stdout.on('data', (data) => {
   console.log(`data => ${data}`);
  });
  
  child.stderr.on('data', (data) => {
    console.log(`error => ${data}`);
   });
   
   child.on('close', () => { 
    console.log(`child process closed`);
   });

  child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
  });

