const express = require("express")
const db = require('./db')

let app = express()
app.use(express.json())

app.get('/', async (req, res) => {
  res.send("Welcome")
})

app.get("/belajar", async (req, res) => {
  try {
    const query = `select * from belajar`
    const data = await db.query(query);
    res.status(200).send({
      success: true,
      data: data.rows
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.get("/belajar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = `select * from belajar where id_belajar = $1`
    const data = await db.query(query, [id]);
    let message = data.rows.length == 0 ? 'Maaf data tidak ditemukan' : 'Data ditemukan'
    res.status(200).send({
      success: true,
      message: message,
      data: data.rows
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})


app.post("/tambah-belajar", async (req, res) => {
  try {
    const { nama_peserta, materi } = req.body
    const query = `insert into belajar (nama_peserta, materi) values($1, $2) returning *`
    
    // // Percobaan 1
    // const insertData = await db.query(query, [nama_peserta, materi], (err, result) => {
    //   if (err) {
    //     console.log("Insert data error")
    //     // res.status(400)
    //   }
    //   return result
    // })

    // Percobaan 2
    const data = await db.query(query, [nama_peserta, materi]);
    res.status(200).send({
      success: true,
      data: data.rows[0]
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.delete("/delete-belajar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = `delete from belajar where id_belajar = $1`
    await db.query(query, [id]);
    res.status(200).send({
      success: true,
      data: null
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.put("/update-belajar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { nama_peserta, materi } = req.body
    const query = `update belajar set nama_peserta = $1, materi = $2 where id_belajar = $3`
    const data = await db.query(query, [nama_peserta, materi, id]);
    res.status(200).send({
      success: true,
      data: data.rows[0]
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.listen(3000, () => {
  console.log("sedang berjalan di port 3000")
})