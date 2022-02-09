const express = require('express');
const app = express();

app.use('/', function(req, res, next) {
  console.log('Aplikasi sedang berjalan')
  next()
})

app.get('/', function(req, res) {
  res.send("Welcome") 
})

app.get('/table/:amount', function(req, res) {
  var party = req.params.amount
  var message = ""
  if (party == 1) {
    message = "Nama saya Adi"
  } else if (party == 2) {
    message = "Rumah saya di Surabaya"
  }
  res.send(message)
})

app.post('/users', function(req, res) {
  const message = "Ini data post di endpoint users"
  console.log(message)
  res.send(message)
})

app.put('/users/:id', function(req, res) {
  const message = `Ini data put di endpoint users/${req.params.id}`
  console.log(message)
  res.send(message)
})

app.delete('/users/:id', function(req, res) {
  const message = `Ini data delete di endpoint users/${req.params.id}`
  console.log(message)
  res.send(message)
})

app.listen(3000, function() {
  console.log('server berjalan di 3000')
})

