const Router = require('express-promise-router')

const db = require('../db')

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router()

// export our router to be mounted by the parent application
module.exports = router

router

.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  next();
})

.get('/spreads', async (req, res) => {
  //const { id } = req.params
  const { rows } = await db.query('SELECT * FROM spreads') //WHERE id = $1', [id])
  res.send(rows)//[0])
  console.log(rows)
})

.post('/new-spread', async (req, res) => {

  console.log(req.body);

  var project_idfk = req.body.project_idfk;
  var spread_num = req.body.spread_num;
  var spread_city = req.body.spread_city;
  var spread_state = req.body.spread_state;
  var supervisor_name = req.body.supervisor_name;
  var supervisor_id = req.body.supervisor_id;
  var per_diem = req.body.per_diem;
  var mileage = req.body.mileage;
  var vehicle = req.body.vehicle;
  var computer = req.body.computer;
  var phone = req.body.phone;
  var utv = req.body.utv;

  let values = [project_idfk, spread_num, spread_city, spread_state, supervisor_name, supervisor_id, per_diem, mileage, vehicle, computer, phone, utv];

  const { rows } = await db.query(
    `INSERT INTO spreads 
    (
      project_idfk,
      spread_num,
      spread_city,
      spread_state,
      supervisor_name,
      supervisor_id,
      per_diem,
      mileage,
      vehicle,
      computer,
      phone,
      utv
    ) 
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})