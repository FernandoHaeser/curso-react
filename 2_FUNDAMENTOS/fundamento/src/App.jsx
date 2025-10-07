import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent  from '../components/FirstComponent'
import TemplatesExpressions from '../components/TemplatesExpressions'
import Events from '../components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 id='titulo'>Oi caralho</h1>
      <h2 id='h2'>Teste para animacao</h2>
      <FirstComponent/>
      <TemplatesExpressions/>
      <Events/>
    </>
  )
}

export default App
