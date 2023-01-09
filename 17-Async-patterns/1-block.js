const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){

        res.end('Home Page')
    }

    if(req.url === '/about'){

        res.end('About site')
        // Block code slows all users!
        for(let i = 0 ; i < 1000; i++){
            for(let j = 0;j < 1000; j++)
             console.log(`${i} ${j}`)
        }
    }
    res.end('Error page')
})

server.listen(5000, ()=>{
    console.log('Listing on  port 5000...')
})