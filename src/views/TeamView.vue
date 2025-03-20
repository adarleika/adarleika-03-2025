<script setup lang="ts">
import { onMounted } from 'vue'
import { usePokemonDetails } from '../stores/pokemonDetalle'
import { usePokemonStore } from '../stores/pokemon'

const pokemonDetail = usePokemonDetails()
const pokemonStore = usePokemonStore()

console.log(pokemonDetail)

onMounted(() => {
  pokemonStore.fetchPokemons()
  console.log(pokemonStore)
})

onMounted(() => {
  pokemonDetail.fetchPokemonData()
  console.log(pokemonDetail)
})
</script>

<template>
  <h1>Aqui se mustran el detalle de los pokemones de mi equipo</h1>

  <div
    v-if="pokemonDetail.pokemonData && pokemonDetail.pokemonData.length > 0"
    class="pokemon-list"
  >
    <div v-for="pokemon in pokemonDetail.pokemonData" :key="pokemon.name" class="pokemon-card">
      <lu>Propiedades</lu>
      <li class="titlePokemon">{{ pokemon.name }}</li>

      <img
        v-for="pokemon in pokemonStore.pokemons"
        :key="pokemon.name"
        :src="
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
          pokemonStore.getPokemonId(pokemon.url) +
          '.png'
        "
        alt=""
      />
      <p>Tipo</p>
      <p>Stats (con grafico)</p>
      <p>Sonido (cries) se debe escuchar</p>
      <p>Altura</p>
      <p>Peso</p>
      <p>Descripcion</p>
      <p>
        cadena evolutiva la cadena evolutiva es mostrar el pokemon base y todas sus evolucione,
        deben tener su nombre e imagen
      </p>
    </div>
  </div>
</template>
