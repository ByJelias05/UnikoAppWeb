import "../Styles/Conversations.css"
import foto from "../Images/image.png"
import { BoxChat } from "./Box-Chat"

export function Conversations(){
    return(
        <div className="Contenedor-Conversations">
            <div className="Historias">
                <div className="Box-Historia">
                    <div className="Borde-Historia">
                        <img src={foto} alt="" />
                    </div>
                </div>
                <div className="Box-Historia">
                    <div className="Borde-Historia">
                        <img src={foto} alt="" />
                    </div>
                </div>
                <div className="Box-Historia">
                    <div className="Borde-Historia">
                        <img src={foto} alt="" />
                    </div>
                </div>
                <div className="Box-Historia">
                    <div className="Borde-Historia">
                        <img src={foto} alt="" />
                    </div>
                </div>
                <div className="Box-Historia">
                    <div className="Borde-Historia">
                        <img src={foto} alt="" />
                    </div>
                </div>
                
            </div>
            <div className="Filtro-Conversaciones">
             
                    <div className="Cantidad-Mensajes">
                        <h1>Mensajes</h1>
                        <h3>25 nuevos</h3>
                    </div>
                    <div className="Filtro">
                        <input type="text" placeholder="Buscar chat"/>
                    </div>
                    <div className="Panel-Conversaciones">
                        <div className="Usuarios-Anclados">
                            <h4>Usuarios anclados</h4>
                            <div className="Contenedor-Boxes">
                                <BoxChat></BoxChat>
                            </div>
                        </div>
                        <div className="Chats-Grupales">
                            <h4>Chats grupales</h4>
                            <div className="Contenedor-Boxes">
                                <BoxChat></BoxChat>
                            </div>
                        </div>
                        <div className="Todos-Mensajes">
                            <h4>Todos los Mensajes</h4>
                            <div className="Contenedor-Boxes">
                                <BoxChat></BoxChat>
                                <BoxChat></BoxChat>
                            </div>
                        </div>
                    </div>
              
            </div>
        </div>
    )
}