import prodModel from '../../models/prodModel.js'

const create = (req, res) => {
  const prod = req.body
  const dataValidated = prodModel.validateCreate(prod)
  console.log(dataValidated)
  if(!dataValidated.success){
    return res.status(400).json({
      error: "Dados Invalidos!",
      fields: dataValidated.error.flatten().fieldErrors
    })    
  }
  else {const result = prodModel.create(prod)
  res.json({
    success: "Usuarios Listados com Sucesso",
    prods: result
  })}
}

export default create