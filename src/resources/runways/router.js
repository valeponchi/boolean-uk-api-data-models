const runwayRouter = require('express').Router()

const { getAllRunways, createOneRunway } = require('./controller')

runwayRouter.get('/', getAllRunways)
runwayRouter.post('/', createOneRunway)

module.exports = runwayRouter
