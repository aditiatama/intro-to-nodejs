exports.getPeserta = async (req, res) => {
  try {
    const query = `select * from peserta`
    const result = await db.query(query);
    res.status(200).send({
      success: true,
      data: result.rows
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
}