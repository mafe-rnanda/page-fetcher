
// get the input from the terminal
let args = process.argv.slice(2);
// console.log(args)

// Use the request library to make the HTTP request
const request = require('request');
//Use Node's fs module to write the file
const fs = require('fs')

request(args[0], (error, response, body) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode); 
  fs.writeFile(args[1], body, () => {console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
  })
    
});
  

  /* RESULT: 
  command line: > node fetcher.js http://www.example.edu/ ./index.html
  output: Downloaded and saved 3261 bytes to ./index.html
  */