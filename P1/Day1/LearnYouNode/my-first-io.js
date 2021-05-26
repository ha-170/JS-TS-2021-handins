var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

var lines = file.toString().split('\n').length - 1;

console.log(lines);

// console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length - 1)