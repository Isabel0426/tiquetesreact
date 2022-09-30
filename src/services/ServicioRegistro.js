export async function ServicioRegistro(datos){

    console.log(datos)
    const URI="http://localhost:5000/api/registro"
    const PETICION={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datos)
    }

    let respuesta=await fetch(URI,PETICION)
    let resultado=await respuesta.json()
    return resultado

}