const http = require('http');

http.createServer((req, res) => {
  res.write("hello word")
  res.end()
}).listen(8005)

console.log("server berjalan di 8005")