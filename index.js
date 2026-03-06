require('dotenv').config()
const carros = require('./frota')

const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send([carros.carro1, carros.carro2])
})

console.log([carros.carro1, carros.carro2])
console.log(process.env.PORTA)

app.listen(3000)


