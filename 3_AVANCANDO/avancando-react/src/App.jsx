import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

{/*Na pasta assets*/}
import macacodedodomeio2 from './assets/macacodedodomeio2.webp' 

{/*useState*/}
import Data from './components/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App' style={{paddingBottom: "500px"}}>
        <h1>Olha o macaco</h1>

        {/*Na pasta public*/}
        <img src='/public/macacodedomeio.jpg' alt='macaco com dedo do meio'></img>

        {/*Na pasta assets*/}
        <img src={macacodedodomeio2} alt="macaco ne"/>

        {/*useState*/}
        <Data/>
        
      </div>
    </>
  )
}

export default App
