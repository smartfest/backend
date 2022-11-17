'use strict'

const express = require('express')

const UserCtrl=require('../controllers/user')
const EventoCtrl=require('../controllers/evento')
const auth = require('../middlewares/auth')
const route_api= express.Router()
const {validateCreate} =require('../validators/evento')



//rutas a los accesspoint de los eventos:
//Crear un evento:
route_api.post( '/evento',validateCreate,EventoCtrl.saveEvento ) //asociado a la funcion de callback: getEventos

//Actualizar un evento:
route_api.put('/evento/:eventoId', EventoCtrl.updateEvento)

//Buscar un evento por su id:
route_api.get('/evento/:eventoId',EventoCtrl.getEvento)

//Buscar los x eventos , a partir del n-simo evento
//usa skip, limit
route_api.get('/eventos', EventoCtrl.getEventos) //asociado a la funcion de callback: getEventos

route_api.delete('/evento/:eventoId',EventoCtrl.deleteEvento )
//route_api.post('/uploadFile1', EventoCtrl.uploadFile1)
//route_api.post('/uploadFile2', EventoCtrl.uploadFile2)
module.exports = route_api