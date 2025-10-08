import { useState } from "react"

export const Data = () => {

    let someData = 10;
    const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Clique aqui hermano</button>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => (setAnotherNumber(0))}>Clique aqui para mudar hermano</button>
        
    </div>
  )
}

export default Data