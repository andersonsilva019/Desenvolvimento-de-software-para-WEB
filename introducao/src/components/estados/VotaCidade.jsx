import { useState } from "react"

export function VotaCidade(){ 

  const [winner, setWinner] = useState('')

  const [votes, setVotes] = useState({
    quixada: 0,
    solonopole: 0,
    senador: 0,
  })

  function reset(){
    setVotes({
      quixada: 0,
      solonopole: 0,
      senador: 0,
    })

    setWinner('')
  }

  function vote(city){
    setVotes(prevState => {
      return {
        ...prevState,
        [city]: prevState[city] + 1
      }
    })
  }

  function onVote(){
    const winnerArr = Object.entries(votes).sort((a,b) => b[1] - a[1])

    const [first, second, third] = winnerArr

    if(first[1] > second[1] && first[1] > third[1]){
      return setWinner(first[0])
    }

    if(second[1] > first[1] && second[1] > third[1]){
      return setWinner(second[0])
    }

    if(third[1] > first[1] && third[1] > second[1]){
      return setWinner(third[0])
    }

    return setWinner('Empate')
  }

  return (
    <div className="vota-cidade__container">
      <div className="vota-cidade__container">
        <h2 style={{ color: winner === 'quixada' ? 'green' : (winner === 'Empate' ? 'blue' : 'red') }}>
          Quixadá: {votes.quixada}
        </h2>
        <h2 style={{ color: winner === 'solonopole' ? 'green' : (winner === 'Empate' ? 'blue' : 'red') }}>
          Solonopole: {votes.solonopole}
        </h2>
        <h2 style={{ color: winner === 'senador' ? 'green' : (winner === 'Empate' ? 'blue' : 'red') }}>
          Senador: {votes.senador}
        </h2>
        {winner === 'Empate'? <h2>Empate</h2> : <h2>Vencedor: {winner}</h2>}
      </div>
      
      <div className="vota-cidade__container--buttons">
        <button 
          onClick={() => vote('quixada')} 
          className="btn btn-vote-city"
        >
          Votar Quixadá
        </button>
        <button 
          onClick={() => vote('solonopole')}
          className="btn btn-vote-city"
        >
          Votar Solonopole
        </button>
        <button
          onClick={() => vote('senador')}
          className="btn btn-vote-city"
        >
          Votar Senador
        </button>
        
        <button onClick={onVote} className="btn">
          Quem venceu?
        </button>
        
        <button onClick={reset} className="btn btn-reset">
          Resetar
        </button>
      </div>
    </div>
  )
}