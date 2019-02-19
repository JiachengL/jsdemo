var cluster = require('cluster');
var http = require('http');
var numWorkers = 2;
var count = 0;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numWorkers; i++) {
    console.log('master: about to fork a worker');
    cluster.fork();
  }
   // subscribe event listeners to cluster
   setClusterEvents(cluster);
  
} else {  // child worker processes
    
  console.log('worker: worker #' + cluster.worker.id + ' ready!');
  // increment the current forked child process
  count++;
  console.log("Worker #" + cluster.worker.id + " is incrementing count to " + count);
  
 if (count === 3) {
      cluster.worker.destroy();
  }
}

const setClusterEvents = (cluster) => {
    cluster.on('fork', function(worker) {
        console.log('master: fork event (worker ' + worker.id + ')');
      });
      
      cluster.on('online', function(worker) {
        console.log('master: online event (worker ' + worker.id + ')');
      });
      
      cluster.on('listening', function(worker, address) {
        console.log('master: listening event (worker ' + worker.id + ', pid ' + worker.process.pid + ', ' + address.address + ':' + address.port + ')');
      });
    
      cluster.on('exit', function(worker, code, signal) {
        console.log('master: exit event (worker ' + worker.id + ')');
      });
}