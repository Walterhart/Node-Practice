// asyn-blocking : moment code start task we offload
// code then start a next task
// callback: run when functionality done
const {readFile, writeFile} = require('fs')
console.log('starting...')

// Without utf8(decoder) for read, buffer  will be displayed
// Err handle any errors occurs when reading file
// This callback method is not recommended
readFile('./content/first.txt','utf8', (err, result) =>{
        if (err){
            console.log(err)
            return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err,result)=> {
        if (err){
            console.log(err)
            return
        }
        const  second = result
        writeFile(
        './content/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        (err, result) =>{
            if (err){
                console.log(err)
                return
            }
            console.log(result)
            console.log('done with task')
        }
        )
    })
})
console.log('starting next task...')
