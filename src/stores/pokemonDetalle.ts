import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

interface PokemonDetailData {
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
}

export const usePokemonDetails = defineStore('pokemonDetalle', () => {
  const pokemonData = ref<PokemonDetailData[]>([])
  const loading = ref(false) //Es el estado de la api
  const error = ref<string | null>(null) // Errores de la api
  //const especieData = ref(null)
  /*const evolutivo = ref(null)
  const stats = ref([])
  const tipo = ref([])
  const imageUrl = ref('')
  const descripcion = ref('')
  const sonidoUrl = ref('')
  const altura = ref(0)
  const peso = ref(0)*/

  const tipo = ref<
    {
      slot: number
      type: {
        name: string
        url: string
      }
    }[]
  >([])

  const fetchPokemonData = async (pokemonName: string) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`,
      )
      pokemonData.value.push(response.data)
      console.log(pokemonData.value)
      //const speciesResponse = await axios.get(response.data.species.url)
      //console.log(speciesResponse)
      //especieData.value = speciesResponse.data
      tipo.value = response.data.types
      console.log(pokemonData.value)
      console.log(tipo.value)
    } catch (err) {
      error.value = 'Error al cargar los pokemones'
      console.error('Error fetching pokemons:', err)
    } finally {
      loading.value = false
    }
  }

  //Retorna las funciones que se usan en el template
  return {
    pokemonData,
    loading,
    error,
    fetchPokemonData,
  }
})
