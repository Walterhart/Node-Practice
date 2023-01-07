// os module

// build in module
const os = require('os')

// get current user info
const user = os.userInfo()
console.log(user)

// uptime of the system
console.log(`The System Uptime is ${os.uptime()} second`)

// display information about user  operation system 
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)