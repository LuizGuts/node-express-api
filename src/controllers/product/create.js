import prodModel from '../../models/prodModel.js'

const create = (req, res) => {
    const prod = req.body
    const result = prodModel.create(prod)
    res.json({
      success: "Produtos Listados com Sucesso",
      prods: result
    })
}

export default create