import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemons = ref([])
  const cantidadPokemon = ref(25)

  const fetchPokemons = async () => {
    try {
      const response = await fetch(
        //`https://pokeapi.co/api/v2/pokemon?limit=${cantidadPokemon.value}&offset=0`,
        `https://pokeapi.co/api/v2/pokemon?limit=${cantidadPokemon.value}`,
      )
      const data = await response.json()
      pokemons.value = data.results
    } catch (error) {
      console.error('Error fetching pokemons:', error)
    }
  }

  return {
    pokemons,
    cantidadPokemon,
    fetchPokemons,
  }
})
