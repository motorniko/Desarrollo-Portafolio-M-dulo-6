<script setup>
import { ref, computed } from 'vue'
import { lugares } from '../data.js'

const busqueda = ref("")

const lugaresFiltrados = computed(() => {
  return lugares.filter(l =>
    l.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
  )
})
</script>

<template>
  <div>
    <h2>Lugares disponibles</h2>

    <input
      v-model="busqueda"
      placeholder="Buscar lugar..."
      class="buscador"
    />

    <p v-if="lugaresFiltrados.length === 0">
      No se encontró ningún lugar
    </p>

    <div class="grid">
      <div
        v-for="lugar in lugaresFiltrados"
        :key="lugar.id"
        class="card"
      >
        <h3>{{ lugar.nombre }}</h3>
        <p>Clima: {{ lugar.clima }}</p>
        <p>Temperatura: {{ lugar.temperatura }}°C</p>

        <router-link :to="`/lugar/${lugar.id}`">
          Ver detalle
        </router-link>
      </div>
    </div>
  </div>
</template>