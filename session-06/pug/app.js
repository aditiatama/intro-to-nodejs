const express = require('express');
const app = express();
const router = express.Router();
const port = 5000;

app.set('view engine', 'pug')
app.set('views','./view')

app.use(router)

router.use('/', function(req, res, next) {
  console.log('Aplikasi sedang berjalan')
  next()
})

router.get('/index', function(req, res) {
  res.render("index", {
    title: "Hey", 
    message: "Hello there!"
  })
})

app.listen(port, function() {
  console.log(`server berjalan di ${port}`)
})
