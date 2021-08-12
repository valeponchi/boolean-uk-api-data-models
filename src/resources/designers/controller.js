const { designer } = require('../../utils/dbClient')

//GET ALL DESIGNERS
const getAllDesigners = async (req, res) => {
	const allDesigners = await designer.findMany()
	res.json({ data: allDesigners })
}

//CREATE ONE DESIGNER
async function createOneDesigner(req, res) {
	const newDesigner = req.body
	const createdDesigner = await designer.create({ data: newDesigner })
	res.json({ data: createdDesigner })
}

module.exports = { getAllDesigners, createOneDesigner }
