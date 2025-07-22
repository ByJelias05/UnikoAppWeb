import foto from "../Images/image.png"
import "../Styles/BoxChat.css"

export function BoxChat(){
    return(
        <div className="Contenedor-BoxChat">
            <div className="Foto-Nombre">
                <div className="Foto">
                    <img src={foto} alt="" />
                    <div className="Estado"></div>
                </div>
                <div className="Nombre-UltimoMensaje">
                    <h2 className="Usuario">Jelias Garcia</h2>
                    <h4 className="Ultimo-Mensaje">Como estas?</h4>
                </div>
            </div>
            <div className="Cantidad-Mensaje">
                <h3>3</h3>
            </div>
        </div>
    )
}