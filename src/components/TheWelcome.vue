<script setup lang="ts">
import { onMounted } from 'vue'
import { usePokemonStore } from '../stores/pokemon'

const pokemonStore = usePokemonStore()

console.log(pokemonStore)

onMounted(() => {
  pokemonStore.fetchPokemons()
  console.log(pokemonStore)
})
</script>

<template>
  <div class="team">
    <h1>Mostrar 25 pokemones</h1>
    <main>
      <div class="pokemon-list">
        <div v-for="pokemon in pokemonStore.pokemons" :key="pokemon.name" class="pokemon-card">
          <p class="titlePokemon">{{ pokemon.name }}</p>
          <img
            :src="
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
              pokemonStore.getPokemonId(pokemon.url) +
              '.png'
            "
            alt=""
          />
          <div>
            <button :value="pokemon.name" class="addPokemon">Elige tu Pokemon</button>
          </div>
        </div>
        <div>
          <button @click="pokemonStore.prevPage">Anterior</button>
          <span>Página {{ pokemonStore.currentPage }}</span>
          <button @click="pokemonStore.nextPage" :disabled="pokemonStore.nextPageDisabled">
            Siguiente
          </button>
        </div>
        <router-link class="verEquipo" to="/team">Ver Equipo</router-link>
      </div>
    </main>
  </div>
</template>
