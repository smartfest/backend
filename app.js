'use strict'
const express = require('express')
const bodyParser=require('body-parser')
const app=express()
const api_route_evento= require ('./routes/evento.js')
const api_route_web= require ('./routes/web.js')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/api' ,function (req,res){
    res.send({status:"Smart FEST ON"}).status(200)
})

app.use('/api',api_route)
module.exports= app
