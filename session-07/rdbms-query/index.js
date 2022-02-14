const express = require("express")
const db = require('./db')

let app = express()
app.use(express.json())


// 1. materi (buat insert materi & hapus materi)
// note : jika materi terpakai di peserta. 
// nampil alert tidak boleh hapus
// 2. peserta (buat insert peserta include id materi & hapus peserta)
// 3. nilai (buat insert nilai include id materi, id peserta & hapus nilai) 

app.get('/', async (req, res) => {
  res.send("Welcome")
})

app.post("/tambah-materi", async (req, res) => {
  try {
    const { nama_materi } = req.body
    const query = `insert into materi (nama_materi) values($1) returning *`
    const data = await db.query(query, [nama_materi]);
    res.status(200).send({
      success: true,
      data: data.rows[0]
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.delete("/delete-materi/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const queryChecker = `select * from peserta p left join nilai n on n.id_peserta = p.id_peserta where n.id_materi = $1 or p.id_materi = $2`
    const result = await db.query(queryChecker, [id, id]);

    let success = false
    let message = "Materi tidak bisa dihapus"
    let data = null
    if (result.rows.length == 0) {
      const query = `delete from materi where id_materi = $1`
      await db.query(query, [id]);
      success = true
      message = "Materi berhasil dihapus"
    }
    
    res.status(200).send({
      success: success,
      message: message,
      data: data
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.post("/tambah-peserta", async (req, res) => {
  try {
    const { nama, kelas, id_materi } = req.body
    const query = `insert into peserta (nama, kelas, id_materi) values($1, $2, $3) returning *`
    const data = await db.query(query, [nama, kelas, id_materi]);
    res.status(200).send({
      success: true,
      data: data.rows[0]
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.delete("/delete-peserta/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const queryChecker = `select * from materi m left join nilai n on n.id_materi = m.id_materi where n.id_peserta = $1`
    const result = await db.query(queryChecker, [id]);

    let success = false
    let message = "Peserta tidak bisa dihapus"
    let data = null
    if (result.rows.length == 0) {
      const query = `delete from peserta where id_peserta = $1`
      await db.query(query, [id]);
      success = true
      message = "Peserta berhasil dihapus"
    }
    
    res.status(200).send({
      success: success,
      message: message,
      data: data
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.post("/tambah-nilai", async (req, res) => {
  try {
    const { id_peserta, id_materi, nilai, huruf_mutu } = req.body
    const query = `insert into nilai (id_peserta, id_materi, nilai, huruf_mutu) values($1, $2, $3, $4) returning *`
    const data = await db.query(query, [id_peserta, id_materi, nilai, huruf_mutu]);
    res.status(200).send({
      success: true,
      data: data.rows[0]
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.delete("/delete-nilai/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = `delete from nilai where id_nilai = $1`
    await db.query(query, [id]);
    res.status(200).send({
      success: true,
      data: null
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.listen(3000, () => {
  console.log("sedang berjalan di port 3000")
})