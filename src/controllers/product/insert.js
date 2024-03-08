import prodModel from '../../models/prodModel.js'

const insert = (req, res) => {
  const newProd = req.body
	const dataValidated = prodModel.validateInsert(newProd)
	if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
	const prodsResult = prodModel.insert(dataValidated.data)
	res.json({
		success: `Usuário ${newProd.id} atualizado com sucesso!`,
		prods: prodsResult
	})
}

export default insert