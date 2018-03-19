const Router = require('express-promise-router')

const db = require('../db')

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router()

// export our router to be mounted by the parent application
module.exports = router

// router.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

router

  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    next();
  })

  .get('/users', async (req, res) => {
    //const { id } = req.params
    const { rows } = await db.query('SELECT * FROM users') //WHERE id = $1', [id])
    res.send(rows)//[0])
    //console.log(rows)
  })

  .post('/new-user', async (req, res) => {

    console.log(req.body);

    var employee_id = req.body.employee_id;
    var last_name = req.body.last_name;
    var first_name = req.body.first_name;
    var user_type = req.body.user_type;
    var user_name = req.body.user_name;
    var user_pword = req.body.user_pword;


    let values = [employee_id, last_name, first_name, user_type, user_name, user_pword];

    const { rows } = await db.query(
      `INSERT INTO users (
        employee_id, 
        last_name, 
        first_name, 
        user_type, 
        user_name, 
        user_pword) 
        VALUES($1, $2, $3, $4, $5, $6)`,
        [...values])

    res.send({ message: "data inserted" })

    console.log("data inserted");

  })

  .put('/update-user', async (req, res) => {

    console.log(req.body);

    var employee_id = req.body.employee_id;
    var last_name = req.body.last_name;
    var first_name = req.body.first_name;
    var user_type = req.body.user_type;
    var user_name = req.body.user_name;
    var user_pword = req.body.user_pword;

    employee_id

    let values = [last_name, first_name, user_type, user_name, user_pword, employee_id];

    const { rows } = await db.query(
      `UPDATE users SET last_name = $1,
        first_name = $2,
        user_type = $3,
        user_name = $4,
        user_pword = $5
        WHERE employee_id = $6 `,
      [...values])

    res.send({ message: "data updated" })

    console.log("data inserted");

  })