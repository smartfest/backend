'use strict'
const express = require('express')
const bodyParser=require('body-parser')
const app=express()
const api_route_evento= require ('./routes/evento.js')
const api_route_web= require ('./routes/web.js')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',api_route_evento)
app.use('/api',api_route_web)
module.exports= app 