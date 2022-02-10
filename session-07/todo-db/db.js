const Pool = require("pg").Pool
const db = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'todo'
})

module.exports = db