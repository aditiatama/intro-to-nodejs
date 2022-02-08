const http = require('http')

http.createServer((req, res) => {
  res.write("Hello World Updatea")
  res.end()
}).listen(8002)

console.log("server sedang berjalan port 8002")