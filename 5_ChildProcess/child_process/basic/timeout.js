
process.on("message", function(m) {
    if(m.cmd === 'start') {
        console.log('started...');
        setTimeout(() => {
            process.send("completed...");
        }, m.timeout);
    }
    else if (m.cmd === 'done') {
        process.exit();
    };

   
})