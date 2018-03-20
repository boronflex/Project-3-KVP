const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;

const app = express()

// ... more express setup stuff can follow

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//import routes from "./routes"
const mountRoutes = require('./routes')

mountRoutes(app)

app.use(morgan('dev'));


app.listen(PORT, () => console.log('Listening on port: ' + PORT))


//#############################