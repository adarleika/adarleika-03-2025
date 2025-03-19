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
              pokemon.url.split('/').at(-2) +
              '.png'
            "
            alt=""
          />
          <div>
            <button class="addPokemon">Elige tu Pokemon</button>
          </div>
        </div>
        <div>
          <button @click="prevPage" :disabled="currentPage">Anterior</button>
          <span>Página {{ currentPage }}</span>
          <button @click="nextPage" :disabled="currentPage">Siguiente</button>
        </div>
        <router-link class="verEquipo" to="/team">Ver Equipo</router-link>
      </div>
    </main>
  </div>
</template>
