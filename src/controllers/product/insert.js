import prodModel from '../../models/prodModel.js'

const insert = (req, res) => {
    const newProd = req.body
    const prodsResult = prodModel.insert(newProd)
    res.json({
      success: `Produto ${newProd.id} atualizado com sucesso`,
      prods: prodsResult
    })
}

export default insert