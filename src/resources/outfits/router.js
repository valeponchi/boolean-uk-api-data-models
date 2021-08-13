const outfitRouter = require('express').Router()

const { getAllOutfits, createOneOutfit } = require('./controller')

outfitRouter.get('/', getAllOutfits)
outfitRouter.post('/', createOneOutfit)

module.exports = outfitRouter
