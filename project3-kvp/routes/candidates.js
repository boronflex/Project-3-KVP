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

  .get('/candidates', async (req, res) => {
    //const { id } = req.params
    const { rows } = await db.query('SELECT * FROM candidates') //WHERE id = $1', [id])
    res.send(rows)//[0])
    console.log(rows)
  })

  .post('/new-candidate', async (req, res) => {

    console.log(req.body);

    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var nick_name = req.body.nick_name;
    var address_st = req.body.address_st;
    var city = req.body.city;
    var address_state = req.body.address_state;
    var zip = req.body.zip;
    var phone_1 = req.body.phone_1;
    var phone_2 = req.body.phone_2;
    var email = req.body.email;
    var years_experience = req.body.years_experience;
    var prev_position = req.body.prev_position;
    var comments = req.body.comments;

    let values = [first_name, last_name, nick_name, address_st, city, address_state, zip, phone_1, phone_2, email, years_experience, prev_position, comments];

    const { rows } = await db.query(
      `INSERT INTO candidates 
      (
        first_name,
        last_name,
        nick_name,
        address_st,
        city,
        address_state,
        zip,
        phone_1,
        phone_2,
        email,
        years_experience,
        prev_position,
        comments
      ) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
      [...values])

    res.send({ message: "data inserted" })

    console.log("data inserted");

  })