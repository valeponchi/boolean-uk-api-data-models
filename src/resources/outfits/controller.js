const { designer, outfit, model } = require('../../utils/dbClient')

//GET ALL DESIGNERS
const getAllOutfits = async (req, res) => {
	const allOutfits = await outfit.findMany()
	res.json({ data: allOutfits })
}

async function createOneOutfit(req, res) {
	const { type, modelId, designerId } = req.body

	const newOutfit = {
		type,
		modelId,
		designerId,
	}

	const createdOutfit = await outfit.create({
		data: {
			...newOutfit,
			outfit: { connect: { id: parseInt(modelId) } },
			designer: { connect: { id: parseInt(designerId) } },
		},
	})
	res.json({ data: createdOutfit })
}

module.exports = { getAllOutfits, createOneOutfit }
