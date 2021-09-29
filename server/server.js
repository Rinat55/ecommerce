import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import { readFile } from 'fs'
import axios from "axios";


dotenv.config()
const port = process.env.PORT || 8080
const server = express()

server.use(express.json())
server.use(cors())
server.get('/api/v1/get-products', (req ,res ) => {
  readFile(
      `${process.cwd()}/data/data.json`,
      {encoding: 'utf8'},
      (err, text) => {
        if (err) return res.status(404).json({err})
        res.json(JSON.parse(text))
      }
  )
})

server.get('/api/v1/get-rates', ( req, res) => {
    axios.get('https://api.exchangerate.host/latest?base=USD&symbols=USD,RUB,KGS')
        .then(({data}) => res.json(data.rates))
})


// -------------------delete-this-test-route------------------------
server.get('/api/v1/test', (req, res) => res.json({ status: 'OK' }))
// -----------------------------------------------------------------

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.resolve('client/build')))
  server.get('/*', (req, res) => {
    res.sendFile(path.resolve('client/build/index.html'))
  })
}

server.listen(port, () => {
  console.log(`Server has been started on http://localhost:${port}.\nPlease press CTRL + C to stop the server`)
})
