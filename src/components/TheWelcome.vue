<script setup lang="ts">
import { onMounted } from 'vue'
import { usePokemonStore } from '../stores/pokemon'

const pokemonStore = usePokemonStore()
//const id = pokemonStore.url.split('/').at(-2)

console.log(pokemonStore)

onMounted(() => {
  pokemonStore.fetchPokemons()
  console.log(pokemonStore)
})
</script>

<template>
  <div class="team">
    <h1>Mostrar 25 pokemones</h1>
    <!--Este es un mensaje nuevo de prueba para publicar-->
    <main>
      <div class="pokemon-list">
        <div v-for="pokemon in pokemonStore.pokemons" :key="pokemon.name" class="pokemon-card">
          <p>Pokemon: {{ pokemon.name }}</p>
          <img
            :src="
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
              pokemon.url.split('/').at(-2) +
              '.png'
            "
            alt=""
          />
        </div>
      </div>
    </main>
  </div>
</template>
