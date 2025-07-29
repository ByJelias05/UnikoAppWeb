import { useEffect } from "react";
import {Cookies} from "react-cookie"


export function Cargando(){

    const cookie = new Cookies();
    const token = cookies.get("token")

    // useEffect(() =>{

         
    // },[token])

    return(
        <div className="Cargando-Contenedor">

            {
                typeof token != "undefined" ?
                <h1>Cargandfo</h1>
                :
                <h1>bobo</h1>
            }
        </div>
    )
}