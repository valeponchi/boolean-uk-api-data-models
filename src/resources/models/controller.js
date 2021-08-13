const { model } = require('../../utils/dbClient')

//CREATE ONE RUNWAY
async function createOneModel(req, res) {
	const { outfitId, first_name, last_name } = req.body

	const newModel = {
		first_name,
		last_name,
	}

	const createdModel = await model.create({ data: newModel })
	res.json({ data: createdModel })
}

//GET ALL modelS
const getAllModel = async (req, res) => {
	const allMModel = await model.findMany()
	res.json({ data: allMModel })
}

//GET ONE model
const getOneModel = async (req, res) => {
	const { id } = req.params

	const oneModel = await model.findUnique({
		where: { id: parseInt(id) },
	})
	res.json({ data: oneModel })
}

module.exports = { getAllModel, createOneModel, getOneModel }
