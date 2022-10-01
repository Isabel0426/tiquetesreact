export async function ServicioTiquetes(){

    const URI="http://localhost:5000/api/tiqueteconsulta"

    const PETICION={
        method:'GET'
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos




}