const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getDFoundation,
  getDFYouths
}

function getDFoundation (db = connection) {
  return db('DFoundation').select()
}

function getDFYouths (db = connection) {
  return db('DFYouth').select()
}
