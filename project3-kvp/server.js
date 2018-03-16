const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");
const morgan = require('morgan');
const PORT = 3000;

//import routes from "./routes"
const mountRoutes = require('./routes')

const app = express()
mountRoutes(app)

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  database: 'totalstation',
  password: 'seamus',
  host: 'localhost',
  port: 5432,
});

pool.connect((err, db, done) => {
  if(err) {
    return console.log(err);
  } else {
    db.query('SELECT * from users', (err, table) => {
      if(err){
        return console.log(err);
      } else {
        console.log(table);
      }
    })
  }
})

// ... more express setup stuff can follow

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'));

app.use(function(request, response, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, () => console.log('Listening on port: ' + PORT))


//#############################