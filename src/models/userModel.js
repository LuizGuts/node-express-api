import { users } from "../db-memory/user.js"
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
    
    email: z
        .string({
            invalid_type_error: "O Email deve ser um Email.",
            required_error: "Email Obrigatorio"    
        })
        .email({message: "E-Mail Inválido"}),
    
    avatar: z
        .string({
            invalid_type_error: "O Avatar deve ser uma URL.",
            required_error: "Avatar Obrigatorio"    
        })
        .url({message: "URL Inválida"}),
})

const validateCreate = (user) => {
    const partialUserSchema = userSchema.partial({id: true})
    return partialUserSchema.safeParse(user)
}

const validateInsert = (user) => {
    return userSchema.safeParse(user)
}

const validateId = (id) =>{
    const partialUserSchema = userSchema.partial({
		name: true,
		email: true,
		avatar: true
	})
	return partialUserSchema.safeParse({id})
}

const list = () => {
    return users
}

const getById = (id) => {
    return users.find(user => user.id === id)
}

const create = (user) => {
    user.id = users[users.length - 1].id + 1
    users.push(user)
    return users
}

const remove = (id) => {
    return users.filter(user => user.id !== id)
}

const insert = (newUser) =>{
    return users.map(user => {
        if(user.id === newUser.id){
          return {
            id: user.id,
            name: newUser.name || user.name,
            email: newUser.email || user.email,
            avatar: newUser.avatar || user.avatar
          }
        }
          return user
      })
}

export default {list, getById, create, remove, insert, validateCreate, validateInsert, validateId}