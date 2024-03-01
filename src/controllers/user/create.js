import userModel from "../../models/userModel.js"

const create = (req, res) => {
    const user = req.body
    const dataValidated = userModel.validateCreate(user)
    console.log(dataValidated)
    if(!dataValidated.success){
      error: "Dados Invalidos!"
    }
    else {const result = userModel.create(user)
    res.json({
      success: "Usuarios Listados com Sucesso",
      users: result
    })}
}

export default create