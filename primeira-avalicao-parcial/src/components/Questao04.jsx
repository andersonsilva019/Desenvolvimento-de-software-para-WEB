import axios from "axios"
import { useEffect, useState } from "react"

export function Questao04(){
  
  const [countries, setCountries] = useState()
  
  useEffect(() => {
    async function getCountries(){
      const response = await axios.get('https://restcountries.com/v2/region/africa?fields=name,population')
      setCountries(response.data)
    }
    getCountries()
  },[])

  function countryMorePopulation(){
    return countries?.reduce((acc, country) => {
      if(country.population > acc.population){
        return country
      }
      return acc
    })
  }

  return (
    <div>
      <ul>
        <h2 className="fs-4">País mais populoso: 
          <span className="badge bg-primary text-wrap">{countryMorePopulation()?.name}</span>
        </h2>
      </ul>
    </div>
  )
}