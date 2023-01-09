// Event loop perform non-blocking I/O operation by offloading operations to the system kernal when ever possible
// offload time consuming task
// javascript is synchronous and single threaded
//      Read everything line by line
//      Will do call back functions last
/*
    Even loop will  register callback and excute callback when operation completed
    Async is offloaded until sync code is done
 */


/* example 1:
 Readfile is async
const {readFile} = require('fs')
console.log('starting first task')
readFile('./content/first.txt','utf8', (err, result) =>{
    if (err){
        console.log(err)
        return
    }
    // is offloaded until  get a result 
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')*/

/* example 2:
// start operation 
console.log('first')
setTimeout(() => {
    console.log('second')
},0)
console.log('third')
// completed os process */

/* example 3: 
// start operation
// setInterval is async and run in increment
setInterval(() => {
    console.log('Hello world')
},2000)
console.log('I will run first')
// procces is not exited and will continue to run
*/

/* example 4:*
    Proccess will stay alive 
    Event loop waiting for request
*/
const http = require('http')
const server = http.createServer((req,res) => {
    console.log('request event')
    res.end('Hello world')
})

server.listen(5000,() =>{
    console.log('Server listening on port :5000...')
})
