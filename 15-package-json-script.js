// Dev dependencies
// npm i nodemon --save-dev
// can use -D or --save-dev
// nodemon watch for changes instead of dev having to restart command
// PM2 is better to use than nodemon
// Examples of use: format,  testing package, etc
// use only when creating app 


//Example of adding a script to package.json

/*

{
  "name": "node-practice",
  "version": "1.0.0",
  "description": "Default ",
  "main": "1-simple-output.js",
  "scripts": {
    "start": "node 14-package-json.js"   <---npm start will run this script
    "dev": "nodemon 14-package-json.js"  <-- some will require spefic command other than start to run
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Walterhart/Node-Practice.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Walterhart/Node-Practice/issues"
  },
  "homepage": "https://github.com/Walterhart/Node-Practice#readme",
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}

*/

// how to uninstall package: uninstall npm uninstall packageName
// nuke approach:   remove  node module and package.lock file then enter npm install
// also can remove from package.json