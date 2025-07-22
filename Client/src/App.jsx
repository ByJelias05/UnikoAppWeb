import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles/App.css'
import { Chat } from './Views/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Chat/>
    </div>
  )
}

export default App
