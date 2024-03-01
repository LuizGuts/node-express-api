import { prods } from "../db-memory/product.js";

const list = () => {
    return prods
}

const create = (prod) => {
    prod.id = prods[prods.length - 1].id + 1
    prods.push(prod)
    return prods
}

const remove = (id) => {
    return prods.filter(prod => prod.id !== id)
}

const insert = (newProd) =>{
    return prods.map(prod => {
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
}

export default {list, create, remove, insert}