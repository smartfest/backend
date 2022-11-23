'use strict'

const express = require('express')
const EventoCtrl=require('../controllers/web')
const route_api= express.Router()
const {validateCreate,validateEdit,validateGetEvento,validateGetEventos,validateDeleteEvento} =require('../middlewares/evento')
const multer = require('multer'); 


const upload = multer({});
//rutas a los accesspoint de los eventos:
//Crear un evento:
route_api.post('/evento',upload.single('file'),validateCreate,EventoCtrl.saveEvento ); //asociado a la funcion de callback: getEventos




module.exports = route_api