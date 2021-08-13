const modelRouter = require('express').Router()

const { getAllModel, createOneModel, getOneModel } = require('./controller')

modelRouter.get('/', getAllModel)
modelRouter.get('/:id', getOneModel)

modelRouter.post('/', createOneModel)

module.exports = modelRouter
