const Router = require('express-promise-router')

const moment = require('moment');

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


.get('/candidates-history', async (req, res) => {
  //const { id } = req.params
  const { rows } = await db.query('SELECT * FROM candidates, candidate_history WHERE candidates.id = candidate_idfk') //WHERE id = $1', [id])
  res.send(rows)//[0])
  //console.log(rows)
})

.post('/pick-interviewees', async (req, res) => {

  //console.log(req.body.item);

  var candidateID = req.body.candidate_idfk;
  var currentDate = moment().format();

  //console.log(currentDate)
  var added_by = 76759;// need to grab this from login later

  let values = [candidateID, currentDate, added_by]

  const { rows } = await db.query(
    `INSERT INTO candidate_history 
    (
      candidate_idfk,
      added_date,
      added_by
    ) 
      VALUES($1, $2, $3)`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})