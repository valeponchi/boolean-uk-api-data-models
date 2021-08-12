const designerRouter = require('express').Router()

const { getAllDesigners, createOneDesigner } = require('./controller')

designerRouter.get('/', getAllDesigners)
designerRouter.post('/', createOneDesigner)

module.exports = designerRouter
