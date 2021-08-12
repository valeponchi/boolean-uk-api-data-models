const designerRouter = require('express').Router()

const { getAllDesigners, createOneDesigners } = require('./controller')

designerRouter.get('/', getAllDesigners)
designerRouter.post('/', createOneDesigners)

module.exports = designerRouter
