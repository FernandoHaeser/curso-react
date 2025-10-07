export const Events = () => {

    const handleClick = () => {
        document.getElementById('h2').innerHTML = 'Ain caralho'
    }

    // Funcao de renderizacao
    const renderSomething = (x) => {
        if(x) {
            return <h1>RAW - renderizou</h1>
        } else {
            return <h1>RAW - renderizou algo ai kkkkkk</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={() => document.getElementById('titulo').innerHTML = "Voce alterou o texto"}>
                Clique aqui</button><br></br>

            <button onClick={handleClick}>
                Clique aqui - com funcao
            </button>
        </div>
         {/*FUncao com renderizacao*/}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events