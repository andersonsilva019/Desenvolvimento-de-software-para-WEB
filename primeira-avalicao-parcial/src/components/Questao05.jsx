import axios from "axios"
import { useEffect, useState } from "react"

export function Questao05(){
  
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('africa')

  const isSearchToMorePopulation = search === 'africa' || search === 'americas'
  
  useEffect(() => {
    async function getCountries(){
      const response = await axios.get(`https://restcountries.com/v2/region/${search}?fields=name,population`)
      setCountries(response.data)
    }
    getCountries()
  },[search])

  function countryMorePopulation(){
    return countries?.reduce((acc, country) => {
      if(country.population > acc.population){
        return country
      }
      return acc
    }, {
      name: '',
      population: 0
    })
  }

  function countryLessPopulation(){
    return countries?.reduce((acc, country) => {
      if(country.population < acc.population){
        return { ...country }
      }
      return acc
    })
  }

  return (
    <div>
      <ul>
        {isSearchToMorePopulation ? (
          <h2>País mais populoso: {countryMorePopulation()?.name}</h2>
        ) : (
          <h2>País menos populoso: {countryLessPopulation()?.name}</h2>
        )}
      </ul>
      <button className="btn btn-primary" onClick={() => setSearch('americas')}>Alterar para Americas</button>
      <button className="btn btn-primary ms-3" onClick={() => setSearch('asia')}>Alterar para Asia</button>
    </div>
  )
}