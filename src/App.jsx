import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Theme from './components/Theme'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MessageBoard from './pages/MessageBoard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Theme />} />
          <Route path='/messageboard' element={<MessageBoard />} />
        </Routes>
      </HashRouter>


    </>
  )
}

export default App
