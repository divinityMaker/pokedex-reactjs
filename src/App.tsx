import React, { useEffect, useState } from 'react'
import PokemonAPI from './services/getPokemons'
import { Pokemon } from './types/PokemonType'
import { SimpleGrid, Container, Image } from '@chakra-ui/react'
import logo from './assets/logo.webp'
const PokemonCard = React.lazy(async () => await import('./components/PokemonCard'))
const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>()
  let offset = 20
  useEffect(() => {
    const handleScroll = (e: any): void => {
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

  return (
    <>
      <Container
        display='flex'
        flexDirection='column'
        alignItems='center'
        marginBottom='30px'
      >
        <Image
          src={logo}
          boxSize='85%'
          alt='logo'
        />
      </Container>
      <SimpleGrid
        padding='1em'
        templateColumns='repeat(auto-fit, minmax(300px, 1fr))'
        gridGap='30px'
        placeItems='center'
      >
        { pokemon.map(item => { return <PokemonCard data={item} key={item.id}/> }) }
      </SimpleGrid>
    </>
  )
}

export default App
