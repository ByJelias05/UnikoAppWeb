import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Login } from "../Views/Login"
import {Chat} from "../Views/Chat"

import {createContext, useState} from "react"

export const LoginContext = createContext();
export function Rutas(){

    const [Usuario, setUsuario] = useState({})

    return(
        <LoginContext.Provider value={[Usuario, setUsuario]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Chat}/>
                    <Route path="/Login" Component={Login}/>
                </Routes>
            </BrowserRouter>
        </LoginContext.Provider>
            
    )
}

