const express = require("express")
const db = require('./db')

let app = express()

app.use(express.json())

app.post("/tambah-belajar", async (req, res) => {
  try {
    const nama_peserta = req.body.nama_peserta
    const materi = req.body.materi
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
    await db.query(query, [nama_peserta, materi], (err, result) => {
      console.log(result)
      res.json(result.rows[0])
    })

  } catch(error) {
    console.log(`Ini error ${error.message}`)
  }
})

app.delete("/delete-belajar/:id", async (req, res) => {
  const id = req.params.id;
  const query = `delete from belajar where id_belajar = $1`
  await db.query(query, [id], (err, result) => {
    console.log(result)
    res.json("hapus sukses")
  })
})

app.listen(3000, () => {
  console.log("sedang berjalan di port 3000")
})