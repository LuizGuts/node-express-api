//const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'
import logger from './middlewares/logger.js'
import userRouter from './routers/userRouter.js'
import prodRouter from './routers/productRouter.js'
  
  const app = express()

//middleware
  app.use(express.json()) 
  app.use('/user', logger)
  app.use('/prods', logger)

//routes
  app.get('/', (req, res) => {
    res.json({message: "Bem vindo a API"})
  })

  app.use('/user', userRouter)
  app.use('/prods', prodRouter)
  
  app.get('/products', (req, res) => {
    res.json({message: "Rota de Produtos"})
  })
  //run server
  app.listen(PORT, () => {
    console.log(`Servidor Rodando em ${HOST}:${PORT}`)
  })
