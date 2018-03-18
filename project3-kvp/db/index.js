const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  database: 'totalstation',
  password: 'seamus',
  host: 'localhost',
  port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}