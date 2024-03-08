import userModel from "../../models/userModel.js"

const create = (req, res) => {
    const user = req.body
    const dataValidated = userModel.validateCreate(user)
    console.log(dataValidated)
    if(!dataValidated.success){
      return res.status(400).json({
        error: "Dados Invalidos!",
        fields: dataValidated.error.flatten().fieldErrors
      })    
    }
    else {const result = userModel.create(user)
    res.json({
      success: "Usuarios Listados com Sucesso",
      users: result
    })}
}

export default create