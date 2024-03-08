import { users } from "../../db-memory/user.js";
import userModel from "../../models/userModel.js";

const getById = (req, res) => {
  const id = +req.params.id
  const dataValidated = userModel.validateId(id)
  if(!dataValidated.success){
    return res.status(400).json({
        error: "Dados Inválidos!",
        fields: dataValidated.error.flatten().fieldErrors
    })
  }
    const user = userModel.getById(dataValidated.data.id)
    res.json({
      success: `Usuario ${id} encontrado com Sucesso`,
      user
    }) 
}

export default getById