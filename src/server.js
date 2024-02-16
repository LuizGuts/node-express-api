//const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'
import {users} from './db-memory/user.js'

const app = express()

app.use(express.json()) 

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
app.listen(PORT, () => {
  console.log(`Example app listening on port ${HOST}:${PORT}`)
})
