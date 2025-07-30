import "../Styles/ConversationScreen.css"
import foto from "../Images/image.png"
import { Tu_Mensaje } from "./Tu-Mensaje"
import { Mi_Mensaje } from "./Mi-Mensaje"

import {collection, onSnapshot, orderBy, query} from "firebase/firestore"
import {db} from "../FireBaseConfig"
import { useEffect } from "react"
import { useState, useRef } from "react"

import axios from "axios"

export function ConversationScreen({nombre, correo}){

    const [Mensajes, setMensajes] = useState([]);
    const [enviar, setEnviar] = useState("")

    const ContenedorMensajeRef = useRef(null);

    const ScrollFinal = () =>{
        
        ContenedorMensajeRef.current.scrollTop = ContenedorMensajeRef.current.scrollHeight + 100
    }

    const Enviado = () =>{
        if(enviar.trim()){
            axios.post("https://unikoappweb-api.onrender.com/Enviar", {
            mensaje: enviar,
            enviadoPor: nombre
        })
        .then(() => setEnviar(""))
        }   
    }

    useEffect(() =>{

        

        const q = query(
            collection(db, "Conversaciones"),
            orderBy("Fecha", "asc")
        )

        const UnOnsnapshot = onSnapshot(
           q, (response) =>{
                setMensajes(response.docs.map(items => items.data()))
                
            }
        )

        return () => UnOnsnapshot();
    },[])

    useEffect(() => {
      ScrollFinal();
    }, [Mensajes]);

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
                <div ref={ContenedorMensajeRef} className="Mensajes">
                    {
                        Mensajes.map(items =>(
                            items.EnviadoPor == nombre ?
                            <div className="Mi">
                                <Mi_Mensaje Mensaje={items.Mensaje}></Mi_Mensaje>
                            </div>
                            :
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
                        <input onChange={(e) => {setEnviar(e.target.value)}} type="text" value={enviar} placeholder="Escribe un mensaje..."/>
                        <button onClick={Enviado} className="Btn-Enviar"></button>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
