exports.getNilai = async (req, res) => {
  try {
    const query = `select * from nilai`
    const result = await db.query(query);
    res.status(200).send({
      success: true,
      data: result.rows
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
}