'use strict'
const mongoose=require('mongoose')
const Schema=mongoose.Schema

const EventoSchema= Schema({    

    titulo:String,
    fecha_evento:{type:Date},
    horario_inicio:Date,
    descripcion:String,
    flyer:String,
    redes_sociales: [{ red: String, link: String }] ,     
    create_date:{type:Date, default: Date.now()},
    create_lastup:Date,
    id_usuario:Number,
    estado:{type: Number, default:1},

   
    })
    module.exports = mongoose.model('Evento',EventoSchema)
    
