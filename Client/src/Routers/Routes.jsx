import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Login } from "../Views/Login"
import {Chat} from "../Views/Chat"

export function Rutas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Chat}/>
                <Route path="/Login" Component={Login}/>
            </Routes>
        </BrowserRouter>
            
    )
}

