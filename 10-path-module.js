// path module
const path = require('path')

// display user platform separater 
console.log(path.sep)

// display test.txt file path
const filePath = path.join('/content',' subfolder', 'test.txt')
console.log(filePath)

// get basename(selected file) 
const base = path.basename(filePath)
console.log(base)

// display papth to test.txt file
// different computers will have different path
// this will show path to test.txt no matter what computer its on
const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt')
console.log(absolute)