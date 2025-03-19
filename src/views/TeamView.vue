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
  <h1>Aqui se mustran el detalle de los pokemones de mi equipo</h1>

  <div>
    <lu>Propiedades</lu>
    <li>Nombre</li>
    <li>Imagen</li>
    <li>tipo</li>
    <li>stats (con grafico)</li>
    <li>sonido (cries) se debe escuchar</li>
    <li>altura</li>
    <li>peso</li>
    <li>descripcion</li>
    <li>
      cadena evolutiva
      <p>
        la cadena evolutiva es mostrar el pokemon base y todas sus evolucione, deben tener su nombre
        e imagen
      </p>
    </li>
  </div>
</template>
