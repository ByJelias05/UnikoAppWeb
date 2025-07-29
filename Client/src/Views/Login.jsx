import { useState } from "react"
import "../Styles/Login.css"
import axios from "axios";

import {useContext} from "react"
import {LoginContext} from "../Routers/Routes"

import {Cookies} from "react-cookie"

export function Login(){

    const [Usuario, setUsuario] = useContext(LoginContext)

    const [Correo, setCorreo] = useState("");
    const [Contraseña, setContraseña] = useState("");

    // https://unikoappweb-api.onrender.com/Enviar/Login

    const cookie = new Cookies();

    const Logear = () =>{
        
        axios.post("http://localhost:3001/Login", {
            correo: Correo,
            pp: Contraseña
        })
        .then(response => {
            cookie.set('token', response.data, {
            path: '/',
            expires: new Date(Date.now() + 25000),        // en segundos
            sameSite: 'Lax',
            secure: false        // true si estás en HTTPS
            });

            window.location.href = "/"
                        
        })
        
    }

    return(
        <div className="Contenedor-Login">
            <div className="Lateral-Izquierdo">
                <div className="Logo">
                    <h1>Uniko</h1>
                </div>
                <div className="AcercaDe-Cuenta">
                    <h1>¡Hey!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, nulla. Vitae voluptatum quia tenetur corporis aperiam? Expedita commodi sed illum, quasi in consequuntur natus eos nostrum laborum voluptates quod sint.</p>
                    <button onClick={() => {alert("klk")}}>Crear Cuenta</button>
                </div>
            </div>
            <div className="Lateral-Derecho">

                <div className="Titulo">
                    <h1>Inicar Sesion</h1>
                    <p>Inicia sesión para disfrutar de la app  con tus mejores amigos.</p>
                </div>

                <div className="Correo">
                    <input type="text" onChange={(e) => setCorreo(e.target.value)} placeholder="Correo"/>
                    <label htmlFor="">Perdiste tu correo?</label>
                </div>

                <div className="Contraseña">
                    <input type="text" onChange={(e) => {setContraseña(e.target.value)}} placeholder="Contraseña"/>
                    <label htmlFor="">Olvidaste tu contraseña?</label>
                </div>

                <div className="Iniciar-Sesion">
                    <button onClick={Logear}>Iniciar Sesion</button>
                </div>

                <div className="Ayudas">
                    <label htmlFor="">¿Necesitas ayuda para ingresar?</label>
                    <label htmlFor="">¿Aun no tienes cuenta?</label>
                </div>

                <div className="Otros-Metodos">
                    <div className="Box-Metodo"></div>
                    <div className="Box-Metodo"></div>
                    <div className="Box-Metodo"></div>
                </div>
            </div>
        </div>
    )
}