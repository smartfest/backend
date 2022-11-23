'use strict'

const express = require('express')
const EventoCtrl=require('../controllers/evento')
const route_api= express.Router()
const {validateCreate,validateEdit,validateGetEvento,validateGetEventos,validateDeleteEvento} =require('../middlewares/evento')
const multer = require('multer'); 


const upload = multer({});
//rutas a los accesspoint de los eventos:
//Crear un evento:
route_api.post('/evento',upload.single('file'),validateCreate,EventoCtrl.saveEvento ); //asociado a la funcion de callback: getEventos

//Actualizar un evento:
route_api.put('/evento/:eventoId', upload.single('file'),validateEdit,EventoCtrl.updateEvento)

//Buscar un evento por su id:
route_api.get('/evento/:eventoId',validateGetEvento,EventoCtrl.getEvento)

//Buscar los x eventos , a partir del n-simo evento
//usa skip, limit
route_api.get('/eventos', validateGetEventos,EventoCtrl.getEventos) //asociado a la funcion de callback: getEventos

//eliminar un evento
route_api.delete('/evento/:eventoId',validateDeleteEvento,EventoCtrl.deleteEvento )


module.exports = route_api