import axios from 'axios'
import { useEffect, useState } from 'react'

export function Questao03() {

  const [result, setResult] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    try {
      async function getAllResults() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        setResult(response.data.results)
      }
      getAllResults()
    } catch (error) {
      console.log(error)
    } 
  }, [offset])

  return (
    <div>
      <ul>
        {result.map(item => (
          <li>
            {item.name}
          </li>
        ))}
      </ul>
      <button className='btn btn-primary' onClick={() => setOffset(prev => prev + 10)}>
        Buscar mais 10 pokemons
      </button>
    </div>
  )
}