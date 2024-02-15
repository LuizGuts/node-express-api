//const express = require('express')
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({message: 'Nada demais aqui'})
})
app.get('/segredo', (req, res) => {
    res.json({message: 'Eu vo ti conta um segredo >:D'})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
