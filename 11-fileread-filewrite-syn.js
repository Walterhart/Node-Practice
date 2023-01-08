// interact with file systems
// read/write module
// syn-nonblocking: Only one user can use at a time.
// other users have to wait 

const {readFileSync, writeFileSync} = require('fs');
console.log('starting...')
// read a filed
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first,'\n', second)

// write a file
// if exist will overwrite text file
// else will create text file
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`, 
    //  will add a new line to text file
    {flag: 'a'}
)
console.log('task done')
console.log('starting next task...')