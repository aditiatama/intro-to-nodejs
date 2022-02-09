const express = require('express');
const app = express();

app.use('/', function(req, res, next) {
  console.log('Aplikasi sedang berjalan')
  next()
})

app.get('/', function(req, res) {
  res.send("<h1>Welcome</h1>") 
})

app.get('/about', function(req, res) {
  res.sendFile('./about.html', {root: __dirname}) 
})


app.listen(5000, function() {
  console.log('server berjalan di 5000')
})