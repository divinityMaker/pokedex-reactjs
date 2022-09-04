import React, { useEffect, useState } from 'react'
import PokemonAPI from './services/getPokemons'
import { Pokemon } from './types/PokemonType'

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>()
  let offset = 30
  useEffect(() => {
    const handleScroll = (e): void => {
      if (
        window.innerHeight + parseInt(e.target.documentElement.scrollTop) + 1 >=
        parseInt(e.target.documentElement.scrollHeight)
      ) {
        offset = offset += 10
        const infiniteScrolling = async (): Promise<void> => {
          const response = await PokemonAPI.loadMorePokemons(offset)
          setPokemon(state => [...state as Pokemon[], ...response])
        }
        void infiniteScrolling()
      }
    }
    const apiCall = async (): Promise<void> => {
      const response = await PokemonAPI.getPokemonData()
      setPokemon(response)
    }
    void apiCall()
    window.addEventListener('scroll', handleScroll)
  }, [])

  if (pokemon === undefined) return <h1>Loading</h1>

  return (<h1>{pokemon.map(item => {
    return (
      <>
        <img key={item.id} src={item.sprites.front_default} />
        <br />
      </>
    )
  })}</h1>)
}

export default App
