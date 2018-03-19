// ./routes/index.js
const users = require('./user')
const projects = require('./projects')
const spreads = require('./spreads')
const candidates = require('./candidates')
const candidate_history = require('./candidate_history')

module.exports = (app) => {
  app.use('/api', users)
  app.use('/api', projects)
  app.use('/api', spreads)
  app.use('/api', candidates)
  app.use('/api', candidate_history)

  // etc..
}