import { useState } from "react"
import "../Styles/Login.css"
import axios from "axios";

import {useContext} from "react"
import {LoginContext} from "../Routers/Routes"

import {Cookies} from "react-cookie"

import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

export function Login(){

    const [Usuario, setUsuario] = useContext(LoginContext)

    const [Correo, setCorreo] = useState("");
    const [Contraseña, setContraseña] = useState("");

    // https://unikoappweb-api.onrender.com/Enviar/Login

    const cookie = new Cookies();

    const Logear = () =>{
        
        axios.post("https://unikoappweb-api.onrender.com/Login", {
            correo: Correo,
            password: Contraseña
        })
        .then(response => {
            console.log(response.data.token)
            cookie.set('token', response.data.token, {
            path: '/',
            expires: new Date(Date.now() + 25000),        // en segundos
            sameSite: 'Lax',
            secure: false        // true si estás en HTTPS
            });

            // console.log(response.data)
            if(response.data.status == "Exitoso"){
                window.location.href = "/"
            }
                        
        })
        
    }
    
    const provider = new GoogleAuthProvider();

        const Google = () =>{
            const auth = getAuth();

            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
        });
    }

    const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // El usuario ha iniciado sesión
    const uid = user.uid;
    // Puedes acceder a la información del usuario aquí
    // console.log("Usuario autenticado:", user);
    axios.post("http://localhost:3001/Logi/Google", {
        user
    })
    .then(response => {
        localStorage.setItem("google", JSON.stringify(response.data))
        window.location.href = "/"
    })
  } else {
    // El usuario no ha iniciado sesión
    console.log("Usuario no autenticado");
    // Redirigir a la página de inicio de sesión o realizar otra acción
  }
});

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
                    <div className="Box-Metodo" onClick={Google}></div>
                    <div className="Box-Metodo"></div>
                    <div className="Box-Metodo"></div>
                </div>
            </div>
        </div>
    )
}