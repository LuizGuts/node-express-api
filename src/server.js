//const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'
import {users} from './db-memory/user.js'
import logger from './middlewares/logger.js'

  const app = express()

//middleware
  app.use(express.json()) 
  app.use('/user', logger)

//routes
  app.get('/', (req, res) => {
    res.json({message: "Nada demais aqui"})
  })

  app.get('/segredo', (req, res) => {
    res.json({message: "Eu vo ti conta um segredo >:D"})
  })

  app.get('/user', (req, res) => {
    res.json({
      success: "Usuarios Listados com Sucesso",
      users
    })
  })

  app.post('/user', (req, res) => {
    const user = req.body
    user.id = users[users.length - 1].id + 1
    users.push(user)
    console.log(user)
    res.json({
      success: "Usuarios Listados com Sucesso",
      users
    })
  })

  app.delete('/user', (req, res) => {
    const id = req.body.id
    const usersResult = users.filter(user => user.id !== id)
    res.json({
      success: `Usuário ${id} removido com sucesso!`,
      usersResult
    })
  })

  app.put('/user', (req, res) => {
    const newUser = req.body
    const usersResult = users.map(user => {
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
    res.json({
      success: `Usuario ${newUser.id} atualizado com sucesso`,
      usersResult
    })
  })

  //run server
  app.listen(PORT, () => {
    console.log(`Servidor Rodando em ${HOST}:${PORT}`)
  })
