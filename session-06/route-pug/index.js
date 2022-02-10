const express = require('express')
const bodyParser = require("body-parser")
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', 'view')

const dataPeserta = []
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Selamat datang peserta', 
    message: 'Belajar data peserta menggunakan Array',
    data: dataPeserta,
  })
})

app.get('/tambah', (req, res) => {
  res.render('tambah', {
    title: "Tambah Peserta"
  })
})

app.post('/tambah', (req, res) => {
  dataPeserta.push({
    nama: req.body.nama,
  })
  res.redirect("/")
})

app.get('/delete/:id', (req, res) => {
  var idPeserta = req.params.id - 1
  dataPeserta.splice(idPeserta,1)
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
})