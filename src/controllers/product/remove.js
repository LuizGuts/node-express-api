import prodModel from '../../models/prodModel.js'

const remove = (req, res) => {
  const id = req.body.id
	const dataValidated = prodModel.validateId(id)
	if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
	const prodsResult = prodModel.remove(dataValidated.data.id)
	res.json({
		success: `Usuário ${id} removido com sucesso!`,
		users: prodsResult
	})
}

export default remove