// Modules
// CommonJS, every file is  module (by default)
// Modules - Encapsulated Code (only share minimum)
// All node files are Modules

// fetch modules
 const names = require('./4-names');
 const sayHi = require('./5-util.js')
 console.log(names)
 
sayHi('walter')
sayHi(names.peter)
sayHi(names.john)