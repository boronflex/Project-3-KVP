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

  .get('/projects', async (req, res) => {
    //const { id } = req.params
    const { rows } = await db.query('SELECT * FROM projects') //WHERE id = $1', [id])
    res.send(rows)//[0])
    //console.log(rows)
  })

  .post('/new-project', async (req, res) => {

    //console.log(req.body);

    var project_name = req.body.project_name;
    var project_number = req.body.project_number;
    var client_name = req.body.client_name;
    var survey_manager = req.body.survey_manager;
    var survey_manager_empid = req.body.survey_manager_empid;
    var number_spreads = req.body.number_spreads;
    var project_city = req.body.project_city;
    var project_state = req.body.project_state;

    let values = [project_name, project_number, client_name, survey_manager, survey_manager_empid, number_spreads, project_city, project_state];

    const { rows } = await db.query(
      `INSERT INTO projects 
      (
        project_name,
        project_number,
        client_name,
        survey_manager,
        survey_manager_empid,
        number_spreads,
        project_city,
        project_state
      ) 
      VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
      [...values])

    res.send({ message: "data inserted" })

    console.log("data inserted");

  })