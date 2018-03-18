// ./routes/index.js
const users = require('./user')
const projects = require('./projects')
const spreads = require('./spreads')
const candidates = require('./candidates')
const candidate_history = require('./candidate_history')

module.exports = (app) => {
  app.use('/api/users', users)
  app.use('/api/projects', projects)
  app.use('/api/spreads', spreads)
  app.use('/api/candidates', candidates)
  app.use('/api/candidate-history', candidate_history)

  // etc..
}