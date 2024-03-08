import userModel from "../../models/userModel.js"

const insert = (req, res) => {
  const newUser = req.body
	const dataValidated = userModel.validateInsert(newUser)
	if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
	const usersResult = userModel.insert(dataValidated.data)
	res.json({
		success: `Usuário ${newUser.id} atualizado com sucesso!`,
		users: usersResult
	})
}

export default insert