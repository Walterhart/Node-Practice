// http module
// better version of 13 setup
const http = require('http');

// create server
// usinng event emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it/ respond to it
// http has event called request
server.on('request', (req,res) => {
    res.end('Welcome')
})

// port server listing too
server.listen(5000)