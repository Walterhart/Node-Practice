// Modules
// CommonJS, every file is  module (by default)
// Modules - Encapsulated Code (only share minimum)
// All node files are Modules

// fetch modules and store into variable
 const names = require('./4-names');
 const sayHi = require('./5-util.js')
 const data = require('./6-alternative-flavor')
 //console.log(data)
 
 // When module is called it will be invoked
 // require('./7-mind-grendade')
 sayHi('walter')
 sayHi(names.peter)
 sayHi(names.john)