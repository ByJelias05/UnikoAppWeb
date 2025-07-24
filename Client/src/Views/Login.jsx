import "../Styles/Login.css"

export function Login(){
    return(
        <div className="Contenedor-Login">
            <div className="Lateral-Izquierdo">
                <div className="Logo">
                    <h1>Uniko</h1>
                </div>
                <div className="AcercaDe-Cuenta">
                    <h1>¡Hey!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, nulla. Vitae voluptatum quia tenetur corporis aperiam? Expedita commodi sed illum, quasi in consequuntur natus eos nostrum laborum voluptates quod sint.</p>
                    <button>Crear Cuenta</button>
                </div>
            </div>
            <div className="Lateral-Derecho">

                <div className="Titulo">
                    <h1>Inicar Sesion</h1>
                    <p>Inicia sesión para disfrutar de la app  con tus mejores amigos.</p>
                </div>

                <div className="Correo">
                    <input type="text" placeholder="Correo"/>
                    <label htmlFor="">Perdiste tu correo?</label>
                </div>

                <div className="Contraseña">
                    <input type="text" placeholder="Contraseña"/>
                    <label htmlFor="">Olvidaste tu contraseña?</label>
                </div>

                <div className="Iniciar-Sesion">
                    <button>Iniciar Sesion</button>
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