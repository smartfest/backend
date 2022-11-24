import { getEventos, getEventoById,crearEvento,status } from '../services/eventos-services.js'
import { event_table } from '../components/event_table.js'


var input_event;
var form_data;
document.addEventListener("DOMContentLoaded", () => {
  let estado = document.getElementById("admin")
  status().then(e=>{
    estado.innerHTML=e.user;
  })
  const form = document.getElementById("form");
  form_data = new FormData(form)

  input_event =
  {
    titulo: document.getElementById("titulo"),
    ubicacion: document.getElementById("ubicacion"),
    fecha_inicio: document.getElementById("fecha_incio"),
    descripcion: document.getElementById("descripcion"),
    flyer: document.getElementById("flyer"),
    tipo_evento: document.getElementById("nombre_evento"),
    facebook: document.getElementById("facebook"),
    twitter: document.getElementById("twitter")
  }


})

window.create_event = function (id_evento) {
  input_event.ubicacion.value = ""
  input_event.titulo.value = ""
  input_event.fecha_inicio.value = ""
  input_event.flyer.value = ""
  input_event.descripcion.value=""
  input_event.facebook.value="" 
  input_event.twitter.value="" 
}

window.delete_event=function (id_evento){
  let event = document.getElementById("evento-"+id_evento);
  event.innerHTML=" "
}

window.save_event = function () {
  const form = document.getElementById("form");
  form_data = new FormData(form)
  let date = form_data.get("fecha_inicio")
  let index = date.search("T")
  let fecha= date.substring(0,index)

  let cad_redes='[{ "red":"facebook" ,"link":"'+form_data.get("facebook")+'"},{"red":"twiter", "link":"'+form_data.get("twitter")+'" }]'  
  const evento = {
    id_usuario:1,
    direccion: form_data.get("direccion_evento"),
    titulo: form_data.get("nombre_evento"),
    file: form_data.get("flyer"),
    fecha_evento:fecha,
    horario_inicio:date.substring(index+1)+":00",
    descripcion:form_data.get("descripcion"),
    redes_sociales:cad_redes,
    
  }
  crearEvento(evento)

}

window.edit_event = function (id_evento) { 
  const form = document.getElementById("form");
  let form_data = new FormData(form)
  getEventoById(id_evento).then(e => { alert(JSON.stringify(e))
    //alert(e.descripcion);
    //e=e.obj_evento   
    alert(e.redes_sociales);
   let las_redes=JSON.stringify(e.redes_sociales);
   
   input_event.titulo.value = e.titulo;
   input_event.ubicacion.value= e.direccion;
   input_event.descripcion.value=e.descripcion;
   input_event.fecha_inicio.value= e.fecha_evento;
   input_event.flyer.value=e.flyer;
   
  })


}

var modalId = document.getElementById('modalId');
var eventos;
getEventos().then((data) => {
  eventos = data;
  data_tabla()
});


function data_tabla() {
  const table = document.getElementById("data_tabla")

  eventos.eventos.forEach(evento => {
    table.innerHTML += (event_table(evento));
  });

}



