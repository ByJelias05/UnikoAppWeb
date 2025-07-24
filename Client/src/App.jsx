import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles/App.css'
import { Chat } from './Views/Chat'
import { Rutas } from './Routers/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Rutas/>
    </div>
  )
}

export default App
