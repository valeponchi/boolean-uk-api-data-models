const express = require('express')
const morgan = require('morgan')

const app = express()

// ROUTERS

const designerRouter = require('./resources/designers/router')
const runwayRouter = require('./resources/runways/router')
const modelRouter = require('./resources/models/router')
const outfitRouter = require('./resources/outfits/router')

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

// ROUTES
app.use('/designers', designerRouter)
app.use('/runways', runwayRouter)
app.use('/models', modelRouter)
app.use('/outfits', outfitRouter)

app.get('*', (req, res) => {
	res.status(404).json({ msg: 'No route is matching your request..' })
})

//CONNECT THE SERVER
app.listen(4000, () => {
	console.log('The server is connected!')
})
