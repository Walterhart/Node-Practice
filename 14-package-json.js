// npm has many modules that can be downloaded

// local dependency - use  on certain project
// npm i <packageName>

// npm install -g <packageName> - use in any project
// for mac : sudo npm install -g <packageName>

// package.json - mainifest file (stores info about project/package)
// 3 ways to create package.json

// manual (create package.json in root)
// npm init(step-by-step, press enter to skip)
// npm init -y (everything default)

// Example of lodash package
const _ = require('lodash')

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
// nodemon watch for changes
console.log('Hello people')