const Router = require('express-promise-router')

const moment = require('moment');

let currentDate = moment().format();

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
  //var currentDate = moment().format();

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

.put('/make-offer', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);


  var id = req.body.candidateID;
  var job_offer = true;
  var offer_project = req.body.offer_project;
  var offer_spread = req.body.offer_spread;
  var offer_title = req.body.offer_title;
  var offer_pay = req.body.offer_pay;
  var requested_start_date = req.body.requested_start_date;

  let values = [job_offer, offer_project, offer_spread, offer_title, offer_pay, requested_start_date, id];

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      job_offer = $1,
      offer_project = $2,
      offer_spread = $3,
      offer_title = $4,
      offer_pay = $5,
      requested_start_date = $6
      WHERE id = $7`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/no-offer', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);


  var id = req.body.candidateID;
  var job_offer = false;
  var no_offer_reason = req.body.no_offer_reason
  var no_offer_note = req.body.no_offer_notes;


  let values = [job_offer, no_offer_reason, no_offer_note, id];

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      job_offer = $1,
      no_offer_reason = $2,
      no_offer_note = $3 
      WHERE id = $4`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/app-inprogress', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var app_sent_by = 76759;

  let values = [app_sent_by, currentDate, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      app_sent_by = $1,
      app_sent_date = $2
      WHERE id = $3`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/app-complete', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var app_returned = 76759;

  let values = [app_returned, currentDate, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      app_returned = $1,
      app_returned_date = $2
      WHERE id = $3`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/refs-inprogress', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var ref_checks_ip = 76759;

  let values = [ref_checks_ip, currentDate, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      ref_checks_ip = $1,
      ref_checks_ip_date = $2
      WHERE id = $3`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/refs-complete', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var ref_checks_complete = 76759;

  let values = [ref_checks_complete, currentDate, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      ref_checks_complete = $1,
      ref_checks_complete_date = $2
      WHERE id = $3`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/off-inprogress', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var off_nh_pkg_sent = 76759;

  let values = [off_nh_pkg_sent, currentDate, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      off_nh_pkg_sent = $1,
      off_nh_pkg_sent_date = $2
      WHERE id = $3`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/off-complete', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var off_nh_pkg_returned = 76759;

  let values = [off_nh_pkg_returned, currentDate, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      off_nh_pkg_returned = $1,
      off_nh_pkg_returned_date = $2
      WHERE id = $3`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/drugtest-inprogress', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var drug_test = 76759;

  let values = [drug_test, currentDate, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      drug_test = $1,
      drug_test_date = $2
      WHERE id = $3`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/drugtest-complete', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var drug_test_complete = 76759;

  let values = [drug_test_complete, currentDate, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      drug_test_complete = $1,
      drug_test_complete_date = $2
      WHERE id = $3`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/fitnesstest-inprogress', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var fitness_test = 76759;

  let values = [fitness_test, currentDate, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      fitness_test = $1,
      fitness_test_date = $2
      WHERE id = $3`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/fitnesstest-complete', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var fitness_test_complete = 76759;

  let values = [fitness_test_complete, currentDate, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      fitness_test_complete = $1,
      fitness_test_complete_date = $2
      WHERE id = $3`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})

.put('/hired', async (req, res) => {

  //console.log(req.body);

  console.log(req.body);

  var id = req.body.id;
  var hired = true;

  let values = [hired, id];

  console.log(values)

  const { rows } = await db.query(
    `UPDATE candidate_history SET
      hired = $1,
      WHERE id = $2`,
    [...values])

  res.send({ message: "data inserted" })

  console.log("data inserted");

})