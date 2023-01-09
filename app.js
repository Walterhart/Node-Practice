// better setup than 12-fileread

const {readFile} = require('fs');

// readfile is now async
const getText = (path) =>{
    return new Promise(( resolve, reject) =>{
        readFile(path, 'utf-8', (err,data) =>
        {
            if(err){
                reject(err)
                return;
            }
            else{
                console.log(data) 
                resolve(data)
            }
        })

    })
}

getText('./content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))