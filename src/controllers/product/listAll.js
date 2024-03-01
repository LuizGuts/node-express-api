import prodModel from "../../models/prodModel.js"

const listAll = (req, res) => {
    res.json({
      success: "Produtos Listados com Sucesso",
      prods: prodModel.list()
    })
}

export default listAll