'use strict'
const Product=require('../models/evento.js')
const Evento=require('../models/evento.js')
const formidable = require('formidable');

//Creamos un nuevo evento:
/*function saveEvento(req,res){
    console.log('POST /api/saveEvento')    
    //if (Array.isArray(req.body.redes_sociales)) console.log("es un array")
    if (typeof req.body.redes_sociales === 'string' || myVar instanceof String)  
        var redes_sociales = JSON.parse(req.body.redes_sociales);    
        
   
    let obj_evento=new Evento()

    obj_evento.titulo=req.body.titulo
    obj_evento.fecha_evento=req.body.fecha_evento
    obj_evento.horario_inicio=req.body.horario_inicio
    obj_evento.descripcion=req.body.descripcion
    obj_evento.flyer=req.body.flyer        
    obj_evento.create_lastup=Date.now()   
    obj_evento.id_usuario=req.body.id_usuario
    obj_evento.redes_sociales=redes_sociales
    
    console.log(obj_evento)

   
    obj_evento.save((err,eventoStored)=>{
        if (err) return res.status(500).send({message:'Error al guardar el evento en la base de datos'+err})

        return res.status(200).send({obj_evento:eventoStored})
    })
}
*/
//Editamos un evento:

function updateEvento(req,res){
    let eventoId=req.params.eventoId
    let update=req.body
    Evento.findByIdAndUpdate(eventoId,update, (err, eventoUpdated)=>{
        if (err) res.status(500).send({message:'Error al actualizar el evento'})

        res.status(200).send({obj_evento:eventoUpdated})
    })
}


function getEvento(req, res){
    let eventoId= req.params.eventoId
    Evento.findById(eventoId, (err, eventoReturn) =>{

      if (err) return res.status(500).send({message:'Error al realizar la petición'})
      if (!eventoReturn) return res.status(404).send({message:'El evento no existe'})
      console.log(eventoReturn)
      res.status(200).send({obj_evento:eventoReturn})
    })
}



function getEventos(req, res){
    let limit=req.body.limit
    let skip=req.body.skip
    //console.log(req.params)
    
    Evento.find({},(err,eventos)=>{
        if (err) return res.status(500).send({message:'Error al realizar la peticion'})
        if (!eventos) return res.status(404).send({message:'Productos no encontrados'})
        res.status(200).send({eventos})
    }).skip(skip).limit(limit)
}

/*function uploadFile1(req, res,){
    console.log(req);
    const form = formidable({ multiples: true });
    form.uploadDir = "./public/uploads/eventos";
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      console.log(fields.titulo);
      res.json({ fields, files });
    });
}*/
function saveEvento(req, res,){
    console.log('POST /api/uploadFile2')
    const form = formidable({ multiples: false });
    form.uploadDir = "./public/uploads/eventos";
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
     
    if (typeof fields.redes_sociales === 'string' || fields.redes_sociales instanceof String)  
        var redes_sociales = JSON.parse(fields.redes_sociales);           
    var path = require("path");
    const name_file = path.basename(files.file.path)             
    console.log(name_file);
    let obj_evento=new Evento()  
    obj_evento.titulo=fields.titulo
    obj_evento.fecha_evento=fields.fecha_evento
    obj_evento.horario_inicio=fields.horario_inicio
    obj_evento.descripcion=fields.descripcion
    obj_evento.flyer=name_file     
    obj_evento.create_lastup=Date.now()   
    obj_evento.id_usuario=fields.id_usuario
    obj_evento.redes_sociales=redes_sociales        
    console.log(obj_evento)
           
    obj_evento.save((err,eventoStored)=>{
          if (err) return res.status(500).send({message:'Error al guardar el evento en la base de datos'+err})
  
          return res.status(200).send({obj_evento:eventoStored})
      })
      
      
    });
}

module.exports= {
    saveEvento,
    updateEvento,
    getEvento,
    getEventos,

}