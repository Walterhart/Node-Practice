// better setup than 12-fileread
// util allow promise functions

const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


// make a start function as async function
// once promise resolve can do something with value
// wrap in a  try, catch block
const start = async() =>{
    try{
        const first = await readFilePromise('./content/first.txt', 'utf-8')
        const second = await readFilePromise('./content/second.txt','utf-8')
        await writeFilePromise('./content/result-mind-grenade.txt', `This is first and second: ${first} ${second}`)
        console.log(first, second )
        
    }catch(error){
        console.log(error)
    }
    
}

start()

// oversimplefide version
// readfile is now async
// const getText = (path) =>{
//     return new Promise(( resolve, reject) =>{
//         readFile(path, 'utf-8', (err,data) =>
//         {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })

//     })
// }

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))
