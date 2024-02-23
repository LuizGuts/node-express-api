  import express from "express"
  import {prods} from '../db-memory/product.js'

    const router = express.Router()

      router.get('/', (req, res) => {
        res.json({
          success: "Produtos Listados com Sucesso",
          prods
        })
      })
    
      router.post('/', (req, res) => {
        const prod = req.body
        prod.id = prods[prods.length - 1].id + 1
        prods.push(prod)
        console.log(prod)
        res.json({
          success: "Produtos Listados com Sucesso",
          prods
        })
      })
    
      router.delete('/', (req, res) => {
        const id = req.body.id
        const prodsResult = prods.filter(prod => prod.id !== id)
        res.json({
          success: `Produto ${id} removido com sucesso!`,
          prodsResult
        })
      })
    
      router.put('/', (req, res) => {
        const newProd = req.body
        const prodsResult = prods.map(prod => {
          if(prod.id === newProd.id){
            return {
              id: prod.id,
              name: newProd.name || prod.name,
              preco: newProd.preco || prod.preco,
              tipo: newProd.tipo || prod.tipo
            }
          }
            return prod
        })
        res.json({
          success: `Produto ${newProd.id} atualizado com sucesso`,
          prodsResult
        })
      })

export default router