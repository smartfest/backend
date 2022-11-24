'use strict'
const express = require('express')
const bodyParser=require('body-parser')
const app=express()
const api_route= require ('./routes/evento.js')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api',api_route)
// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
app.use(express.static('public/web'));
app.get('/app', (req, res) => {res.sendFile(__dirname + '/public/web/app/index.html')});

app.get('/api' ,function (req,res){
    res.send({status:"Smart FEST ON"}).status(200)
})

module.exports= app
