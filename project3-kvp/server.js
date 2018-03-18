const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

//import routes from "./routes"
const mountRoutes = require('./routes')

const app = express()
mountRoutes(app)


// ... more express setup stuff can follow

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'));

// app.use(function (request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//end points need to move to routes file eventually

// app.get('/api/users', function(request, response) {
//   pool.connect(function(err, db, done){
//     if(err) {
//       return response.status(400).send(err);
//     }
//     else{
//       db.query('SELECT * FROM users', function(err, table){
//         done();
//         if(err){
//           return response.status(400).send(err)
//         } else {
//           return response.status(200).send(table.rows)
//         }
//       })
//     }
//   })
// })


// app.post('/api/new-user', function (request, response) {
//   //console.log(request.body);
//   var employee_id = request.body.employee_id;
//   var last_name = request.body.last_name;
//   var first_name = request.body.first_name;
//   var user_type = request.body.user_type;
//   var user_name = request.body.user_name;
//   var user_pword = request.body.user_pword;
//   let values = [employee_id, last_name, first_name, user_type, user_name, user_pword];
//   pool.connect((err, db, done) => {
//     if (err) {
//       return response.status(400).send(err);
//     } else {
//       db.query('INSERT INTO users (employee_id, last_name, first_name, user_type, user_name, user_pword) VALUES($1, $2, $3, $4, $5, $6)', [...values], (err, table) => {
//         done();
//         if (err) {
//           return response.status(400).send(err);
//         } else {
//           console.log("Data Inserted");
//           db.end();
//           response.status(201).send({ message: 'Data Inserted' });
//         }
//       })
//     }
//   })
// });

app.listen(PORT, () => console.log('Listening on port: ' + PORT))


//#############################