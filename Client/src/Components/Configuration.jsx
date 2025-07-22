import "../Styles/Configuration.css"
import foto from "../Images/image.png"

export function Configuration(){
    return( 
        <div className="Contenedor-Configuration">

            <h1 className="">Perfil</h1>

            <div className="Foto-Perfil">
                <div className="Borde-Foto">
                    <img src={foto} alt="" />
                </div>
            </div>

            <div className="Separador"></div>

            <div className="Panel">

                <h3 className="Sub-Config">Online</h3>

                <div className="Box">

                </div>

                <div className="Box">

                </div>

                <div className="Box">

                </div>
                
            </div>

            <div className="Separador"></div>
            
        </div>
    )
} 