import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Pokemon {
  name: string
  url: string
}

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemons = ref<Pokemon[]>([]) //Almacena la lista de pokemones
  const loading = ref(false) //Es el estado de la api
  const error = ref<string | null>(null) // Errores de la api
  const cantidadPokemon = ref(25) //Cantidad de pokemones por pagina
  const currentPage = ref(1) //Contiene el numero de la pagina actual
  const nextPageDisabled = ref(false) // Boton siguiente que debe estar deshabilitado

  // Esta funcion llama a la api de pokemon y actualiza los datos
  //const fetchPokemons = async (page = 1) => {
  const fetchPokemons = async (page = currentPage.value) => {
    loading.value = true
    error.value = null

    try {
      const offset = (page - 1) * cantidadPokemon.value

      const response = await fetch(
        //`https://pokeapi.co/api/v2/pokemon?limit=${cantidadPokemon.value}&offset=0`,
        `https://pokeapi.co/api/v2/pokemon?limit=${cantidadPokemon.value}&offset=${offset}`,
      )
      const data = await response.json()
      pokemons.value = data.results
      currentPage.value = page
      console.log(currentPage)
      nextPageDisabled.value = data.next === null
      console.log(nextPageDisabled)
      console.log(data.next) //next no es null
      console.log(offset, 'verifica el cambio de pagina') //devuelve 0
    } catch (err) {
      error.value = 'Error al cargar los pokemones'
      console.error('Error fetching pokemons:', err)
    } finally {
      loading.value = false
    }
  }

  //Se le pasa el parametro page a la funcion fetchPokemons en las funciones nextPage y prevPage.
  // Funciones para cambiar de pagina
  const nextPage = () => {
    fetchPokemons(currentPage.value + 1)
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      fetchPokemons(currentPage.value - 1)
    }
  }

  //Retorna las funciones que se usan en el template
  return {
    pokemons,
    loading,
    error,
    cantidadPokemon,
    currentPage,
    nextPage,
    prevPage,
    nextPageDisabled,
    fetchPokemons,
  }
})
