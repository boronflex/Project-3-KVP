const express = require('express')
const mountRoutes = require('./routes')

const PORT = process.env.PORT || 3000;

const app = express()
mountRoutes(app)


app.listen(PORT, () => console.log('Listening on port: ' + PORT))
