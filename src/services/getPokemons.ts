import axios from 'axios'
import { Pokemon } from '../types/PokemonType'

const PokemonAPI = {
  getPokemonData: async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
    const pokemons = response.data.results
    const newPokemon: Pokemon[] = []

    for (const pokemon of pokemons) {
      const response = await axios.get(pokemon.url)
      newPokemon.push(response.data)
    }
    return newPokemon
  }
}

export default PokemonAPI
