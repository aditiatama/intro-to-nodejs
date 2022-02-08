const fs = require('fs');

let readableStream = fs.createReadStream('input.txt');

let writeableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writeableStream)

console.log("selesai piping")