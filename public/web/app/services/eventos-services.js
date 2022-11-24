
const env = {
    "URL": "https://raw.githubusercontent.com/smartfest/frontend/developer/data/eventos.json",
    "API": 'http://localhost:3003/api'
}


async function getEventos() {
    let data = new FormData()
    data.append("skip", 0)
    data.append("limit", 6)

    return await fetch(env.API + `/eventos?limit=${10}&skip=${0}`
    )
        .then(respuesta => {
            return Promise.resolve(respuesta.json());
        }).catch((e) => {
            return Promise.reject(e, " No se encontraron eventos");
        });
}


async function status() {
    return await fetch(env.API, { method: "GET" })
        .then(respuesta => {
            return Promise.resolve(respuesta.json());
        }).catch((e) => {
            console.log(e)
            return Promise.reject("No status");
        });
}


function crearEvento(evento) {
    var data = new FormData();
    console.log(evento)
    data.append("titulo", evento.titulo)
    data.append("descripcion", evento.descripcion)
    data.append("direccion", evento.direccion)
    data.append("file", evento.file)
    data.append("id_usuario", evento.id_usuario)
    data.append("fecha_evento", evento.fecha_evento)
    data.append("horario_inicio", evento.horario_inicio)
    data.append("redes_sociales", evento.redes_sociales)
    data.append("flyer", "")


    console.log(data)
    fetch(env.API + '/evento', {
        method: "POST", headers: {
            'Content-Type': 'application/json'
        }, body: { mode: "formdata", formdata: data }
    })
        .then(res => { console.log("Consulta POST Exitosa", res) })
        .catch(exp => { console.log("Consuslta POST Rechazada", exp) })

}
async function getEventoById(id_evento) {
    var data = fetch(env.URL)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            return Promise.resolve(respuesta.filter((evento) => { return id_evento === evento.id })[0]);
        }).catch(() => {
            return Promise.reject(err);
        });
    return await data
}

export { getEventos, getEventoById, crearEvento, status }