import { useState,useEffect } from "react"
import { ServicioRegistro } from "../services/ServicioRegistro"
import Swal from 'sweetalert2'


export function Actividades ({datex}){
    const[username,setUsername]=useState("")
    const[correo,setCorreo]=useState("")
    const[password,setPassword]=useState("")
    
    function EnviarDatos(evento){
        evento.preventDefault()
        let datos={
            "username":username,
            "correo":correo,
            "password":password,
        }
        console.log(datos)
        ServicioRegistro(datos)
        .then(function(respuesta){
            console.log(respuesta);
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: respuesta.mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        })
    }

    return(
        <>

    <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-5">

                        <form className="" onSubmit={EnviarDatos}>
                                    <h2> Registrese:</h2>

                        <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-plus"></i></span>
                                <input id="username"  class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                                 type="text" 
                                 onChange={(evento)=>{
                                    setUsername(evento.target.value) 
                                 }}
                                 value={username} 
                                 className="form-control shadow"/>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
                                <input id="email" type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"
                                 onChange={(evento)=>{
                                    setCorreo(evento.target.value) 
                                }}
                                value={correo} 
                                className="form-control shadow"/>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-key-fill"></i></span>
                                <input id="password" type="Password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"
                                                                        onChange={(evento)=>{
                                                                            setPassword(evento.target.value) 
                                                                        }}
                                                                        value={password} 
                                                                        className="form-control shadow"/>
                            </div>

                            <button id="boton" type="submit" class="btn btn-primary w-100" >Registrar</button>
                    
                        </form>

                    </div>
                </div>
            </div>
   
        </>
    )
}