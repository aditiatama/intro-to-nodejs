const express = require('express')
const bodyParser = require("body-parser")
const url = require('url')
const queryString = require("querystring")
// const Article = require("./models").Article

let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/welcome", async (req, res) => {
  let page = req.query.page
  let limit = req.query.limit
  let nama = req.query.nama;
  let hasil = "";
  console.log(`Nama = ${nama}`)
  console.log(`Page = ${page}`)
  console.log(`Limit = ${limit}`)

  if (page > 5) {
    hasil = "Tidak boleh"
  } else {
    hasil = "Kita tampilkan"
  }

  res.send({
    nama, page, limit, hasil
  })
})

let server = app.listen(3000, () => {
  console.log(`Server is listening on port ${3000}`)
})