import { users } from "../db-memory/user.js"
import { z } from "zod"

const userSchema = z.object({
    id: z.number(/*{
        required_error: "Avatar é obrigatório.",
        invalid_type_error: "Avatar deve ser um número."
    }*/).int(),
    
    name: z.string(/*{
        required_error: "Avatar é obrigatório.",
        invalid_type_error: "Avatar deve ser um número."
    }*/).min(3, {message: "Minimo de 3 Caracteres."}).max(200, {message: "Maximo de 200 Caracteres."}),
    
    email: z.string(/*{
        required_error: "Avatar é obrigatório.",
        invalid_type_error: "Avatar deve ser um número."
    }*/).email({message: "E-Mail Inválido"}),
    
    avatar: z.string(/*{
        required_error: "Avatar é obrigatório.",
        invalid_type_error: "Avatar deve ser um número."
    }*/).url({message: "URL Inválida"}),
})

const validateCreate = (user) => {
    const partialUserSchema = userSchema.partial({id: true})
    return partialUserSchema.safeParse(user)
}

const list = () => {
    return users
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

export default {list, create, remove, insert, validateCreate}