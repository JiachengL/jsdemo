/* Parent process script */
const { fork } = require('child_process');

const n = fork(`${__dirname}/4-fork-child.js`);

n.on('message', (m) => {
  console.log('PARENT got message:', m);
});

// Causes the child to print: CHILD got message: { hello: 'world' }
n.send({ hello: 'world' });

