// interact with file systems
// read/write module
// syn 

const {readFileSync, writeFileSync} = require('fs');

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