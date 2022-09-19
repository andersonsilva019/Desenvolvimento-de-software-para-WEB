import { useState } from 'react'

export function Contador(){
  const [contador, setContador] = useState(0)
  const [botelho, setBotelho] = useState(false)

  function adicionar(){
    setContador(contador + 1)
    setContador(contador + 1)

    setContador(prev => prev + 1)
    setContador(prev => prev + 1)
  }

  function toggleSena(){
    setBotelho(prevState => !prevState)
  }

  function subtrair(){
    
    if(contador > 0){
      setContador(contador - 1)
    }
    
  }

  function renderizarBotelho(){

    if(botelho){
      return (
        <>
          <br/>
        <img width={260} src="https://res.cloudinary.com/drsxhihfr/image/upload/v1663108470/images/bo_nzswji.jpg" />
        </>
      )
    } 

    return null
  }

  return (
    <div>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button className="btn" onClick={adicionar}>+</button>
      <button className="btn" onClick={subtrair}>-</button>
      <button className="btn" onClick={toggleSena}>
        {botelho ? 'Tira isso, please!!!' : 'Quer tomar um susto?'}
      </button>
      {renderizarBotelho()}
    </div>
  )
}