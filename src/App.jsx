import { useState } from 'react'
import './App.css'
import Details from './pages/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Details />
        
    </>
  )
}

export default App
