var http =require('http')
var fs =require('fs')

http   
    .createServer(function (req,res)  {

    // comment out code use too much memory!
    // this send code back in instance
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')

    // send files back in chunks
    fileStream.on('open', ()=>{

        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
    })
    .listen(5000)