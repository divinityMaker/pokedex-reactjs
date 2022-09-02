import React, { useEffect, useState } from 'react'
import PokemonAPI from './services/getPokemons'
import { Pokemon } from './types/PokemonType'

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>()
  useEffect(() => {
    const apiCall = async (): Promise<void> => {
      const response = await PokemonAPI.getPokemonData()
      setPokemon(response)
    }
    void apiCall()
  }, [])

  if (pokemon === undefined) return <h1>Loading</h1>

  return (<h1>{pokemon.map(item => {
    return <p key={item.id}>{item.name}</p>
  })}</h1>)
}

export default App
