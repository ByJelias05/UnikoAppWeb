import "../Styles/ConversationScreen.css"
import foto from "../Images/image.png"
import { Tu_Mensaje } from "./Tu-Mensaje"
import { Mi_Mensaje } from "./Mi-Mensaje"

import {collection, onSnapshot} from "firebase/firestore"
import {db} from "../FireBaseConfig"
import { useEffect } from "react"
import { useState } from "react"

import axios from "axios"

export function ConversationScreen(){

    const [Mensajes, setMensajes] = useState([]);
    const [enviar, setEnviar] = useState("")

    const Enviado = () =>{
        axios.post("https://unikoappweb-api.onrender.com/Enviar", {
            mensaje: enviar
        })
    }

    useEffect(() =>{
        const UnOnsnapshot = onSnapshot(
            collection(db, "Conversaciones"),
            (response) =>{
                setMensajes(response.docs.map(items => items.data()))
            }
        )

        return () => UnOnsnapshot();
    },[])

    return(
        <div className="Contenedor-ConversationScreen">
            <div className="Informacion-Conversacion">
                <div className="Foto-Receptor">
                    <img src={foto} alt="" />
                </div>
                <div className="Nombre-Estado">
                    <h1 className="Receptor">Jelias Garcia</h1>
                    <h3 className="Estado-Mensaje">Escribiendo...</h3>
                </div>
            </div>
            <div className="Contenedor-Mensajes">
                <div className="Mensajes">
                    {
                        Mensajes.map(items =>(
                            <div>
                                <Tu_Mensaje Mensaje={items.Mensaje}></Tu_Mensaje>
                            </div>
                        ))
                    }
                </div>
                <div className="Enviar-Mensajes">
                    <div className="Input">
                        <button className="Btn-Agregar">+</button>
                        <button className="Btn-Emoji">😂</button>
                        <input onChange={(e) => {setEnviar(e.target.value)}} type="text" placeholder="Escribe un mensaje..."/>
                        <button onClick={Enviado} className="Btn-Enviar"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}





{/* <div>
                        <Tu_Mensaje Mensaje={"Hola ✌️"}/>
                    </div>
                    <Tu_Mensaje Mensaje={"Obtenga información sobre cómo usar el instalador de Visual Studio para instalar SQL Server Management Studio"}></Tu_Mensaje>
                    <div className="Mi">
                        <Mi_Mensaje Mensaje={"Hola"}></Mi_Mensaje>
                    </div>
                    <div className="Mi">
                        <Mi_Mensaje Mensaje={"Obtenga información sobre cómo usar el instalador de Visual Studio para instalar SQL Server Management Studio"}></Mi_Mensaje>
                    </div>
                    <Tu_Mensaje Mensaje={"Ok"}/> */}