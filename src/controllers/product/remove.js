import prodModel from '../../models/prodModel.js'

const remove = (req, res) => {
    const id = req.body.id
    const prodsResult = prodModel.remove(id)
    res.json({
      success: `Produto ${id} removido com sucesso!`,
      prods: prodsResult
    })
}

export default remove