// Streams
// good for continues source or big file
// Writeable, readable, duplex(read and write data) and transform(change when reading or writing)
// note using async we may get a bigger file size  and causing more memory use and variable error can occur
// a soultion is read stream

const {createReadStream} = require('fs');

// highWaterMark: control size of buffer
const stream = createReadStream('./content/big.txt', {
     highWaterMark:9000,
     encoding: 'utf8'})

// result is data passed

stream.on('data', (result) =>{
    console.log(result)
})
stream.on('error', (err) =>{
    console.log(err)
})