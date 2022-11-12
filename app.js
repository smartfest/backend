'use strict'
const express = require('express')
const bodyParser=require('body-parser')


const app=express()
const api_route= require ('./routes/evento.js')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',api_route)
module.exports= app