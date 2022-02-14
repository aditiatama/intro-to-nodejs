exports.getMateri = async (req, res) => {
  try {
    const query = `select * from materi`
    const result = await db.query(query);
    res.status(200).send({
      success: true,
      data: result.rows
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
}

exports.postMateri = async (req, res) => {
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
}