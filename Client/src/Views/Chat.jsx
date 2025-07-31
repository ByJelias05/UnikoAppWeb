import { Configuration } from "../Components/Configuration"
import { Conversations } from "../Components/conversations"
import { ConversationScreen } from "../Components/ConversationScreen"
import Fondo from "../Images/Fondo-Chat.jpg"
import "../Styles/Chat.css"

import {useContext} from "react"
import {LoginContext} from "../Routers/Routes"
import { useEffect } from "react"

import {Cookies} from "react-cookie"
import axios from "axios"
import { useState } from "react"

export function Chat(){

    const [Logeado, setLogeado] = useState(false)
    const [data, setData] = useState()

    const cookies = new Cookies();
    

    useEffect(() =>{
        const token = cookies.get("token")

        const gooogle = JSON.parse(localStorage.getItem("google"));
        

        if(gooogle != null){
            setLogeado(true)
            setData(gooogle.data)
        }
        else{
            if(typeof token != "undefined"){
            fetch("https://unikoappweb-api.onrender.com/Sesion", {
                method: "POST",
                headers: {
                    Authorization: token
                }
            })
            .then(reponse => reponse.json())
            .then(data => {
                console.log(data)
                console.log(data.status)
                if(data.status == "Exitoso"){
                    setLogeado(true)
                    setData(data)
                }
            })
            
        }else{
            window.location.href = "/Login"
        }
        }

    },[])

    return(
        <div>
            {
                Logeado == true ?
                    <div className="Contenedor-Chat">

                        <div className="Fondo-Chat"></div>

                        <div className="Paneles-Laterales">

                            <div className="Configuracion">
                                <Configuration></Configuration>
                            </div>

                            <div className="Conversaciones">
                                <Conversations></Conversations>
                            </div>

                            <div className="Mensajes">
                                <ConversationScreen nombre={data.displayName || data.data.Nombre} correo={data.email || data.data.Correo}></ConversationScreen>
                            </div>
                        </div>

                    </div>
                     :
                    <div>
                        <h1>Cargando.....</h1>
                    </div>
            } 
        </div>
    )
}