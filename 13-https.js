// http module
const http = require('http');

// create server
// (income request, response)
const server = http.createServer((req, res)=>{
//console.log(req)
if(req.url === '/'){
    res.end('Welcome to home page')
}

if(req.url === '/about'){
    res.end('This site is about node.js')
}
res.end(`
<h1>Page does not exist</h1>
<a href="/">back home</a>
`)
})

// port server listing too
server.listen(5000)