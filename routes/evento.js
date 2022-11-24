'use strict'

const express = require('express')
const EventoCtrl=require('../controllers/evento')
const api_route= express.Router()
const {validateCreate,validateEdit,validateGetEvento,validateGetEventos,validateDeleteEvento} =require('../middlewares/evento')
const multer = require('multer'); 
const upload = multer({});
//rutas a los accesspoint de los eventos:
//Crear un evento:
api_route.post('/evento',upload.single('file'),validateCreate,EventoCtrl.saveEvento ); //asociado a la funcion de callback: getEventos

//Actualizar un evento:
api_route.put('/evento/:eventoId', upload.single('file'),validateEdit,EventoCtrl.updateEvento)

//Buscar un evento por su id:
api_route.get('/evento/:eventoId',validateGetEvento,EventoCtrl.getEvento)

//Buscar los x eventos , a partir del n-simo evento
//usa skip, limit
api_route.get('/eventos', validateGetEventos,EventoCtrl.getEventos) //asociado a la funcion de callback: getEventos

//eliminar un evento
api_route.delete('/evento/:eventoId',validateDeleteEvento,EventoCtrl.deleteEvento )


module.exports = api_route