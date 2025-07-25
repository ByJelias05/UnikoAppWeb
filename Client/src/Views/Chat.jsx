import { Configuration } from "../Components/Configuration"
import { Conversations } from "../Components/conversations"
import { ConversationScreen } from "../Components/ConversationScreen"
import Fondo from "../Images/Fondo-Chat.jpg"
import "../Styles/Chat.css"

import {useContext} from "react"
import {LoginContext} from "../Routers/Routes"
import { useEffect } from "react"

export function Chat(){

    const [Usuario, setUsuario] = useContext(LoginContext)

    return(
        <div>
            {
                Usuario.status == "Exitoso" ?
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
                                <ConversationScreen></ConversationScreen>
                            </div>
                        </div>

                    </div>
                    :
                    window.location.href = "/Login"
            }
        </div>
    )
}