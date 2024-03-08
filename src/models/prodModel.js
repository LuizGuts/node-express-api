import { prods } from "../db-memory/product.js";
import { z } from "zod"

const userSchema = z.object({
    id: z
        .number({
            invalid_type_error: "O ID deve ser Numerico.",
            required_error: "ID Obrigatorio"    
        })
        .int(),

    name: z
        .string({
            invalid_type_error: "O Nome deve ser uma String.",
            required_error: "Nome Obrigatorio"    
        })
        .min(3, {message: "Minimo de 3 Caracteres."})
        .max(200, {message: "Maximo de 200 Caracteres."}),
    
    preco: z
        .number({
            invalid_type_error: "O Preco deve ser Numerico.",
            required_error: "Preco Obrigatorio"    
        })
        .int(),
    
    tipo: z
        .string({
            invalid_type_error: "O Tipo deve ser uma String.",
            required_error: "Tipo Obrigatorio"    
        }),
})

const validateCreate = (prod) => {
    const partialUserSchema = userSchema.partial({id: true})
    return partialUserSchema.safeParse(prod)
}

const validateInsert = (prod) => {
    return userSchema.safeParse(prod)
}

const validateId = (id) =>{
    const partialUserSchema = userSchema.partial({
		name: true,
		preco: true,
		tipo: true
	})
	return partialUserSchema.safeParse({id})
}

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

export default {list, create, remove, insert, validateCreate, validateInsert, validateId}