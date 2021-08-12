const { runway } = require('../../utils/dbClient')

//GET ALL DESIGNERS
const getAllRunways = async (req, res) => {
	const allRunways = await runway.findMany()
	res.json({ data: allRunways })
}

//CREATE ONE DESIGNER
async function createOneRunway(req, res) {
	const { runwayId, season, date, location } = req.body

	const newRunway = {
		season,
		date: new Date(date).toISOString(),
		location,
	}

	const createdRunway = await runway.create({ data: newRunway })
	res.json({ data: createdRunway })
}

module.exports = { getAllRunways, createOneRunway }
