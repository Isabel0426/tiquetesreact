import { Routes, Route, Link } from "react-router-dom";
import {Home} from '../Home/Home.js';
import {Menu} from '../Menu/Menu.js';
import { Login } from "../Login/Login.js";
import {Habitaciones} from '../Habitaciones/Habitaciones.js';
export function Rutas(){
    return(
        <>
        <div>
            <Menu></Menu>
                <Routes>
                    
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/habitaciones" element={<Habitaciones/>}/>
                    
                </Routes>
            
        </div>
        </>
    )
}