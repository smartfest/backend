'use strict'
const express = require('express')
const bodyParser=require('body-parser')
const app=express()
const cors = require('cors')
const api_route= require ('./routes/evento.js')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api',api_route)

var corsOptions = {
    origin: "http://localhost:3003"
  };
  
  app.use(cors(corsOptions));


// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
app.use(express.static('public/web'));
app.get('/app', (req, res) => {res.sendFile(__dirname + '/public/web/app/index.html')});
app.get('/api' ,function (req,res){
    res.send({user:"User_Laboratorio"}).status(200)
})

module.exports= app
