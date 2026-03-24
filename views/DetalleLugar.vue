<script setup>
import { useRoute } from 'vue-router'
import { lugares } from '../data.js'

const route = useRoute()

const lugar = lugares.find(l => l.id == route.params.id)
</script>

<template>
  <div v-if="lugar">
    <h2>{{ lugar.nombre }}</h2>

    <p>Clima actual: {{ lugar.clima }}</p>
    <p>Temperatura actual: {{ lugar.temperatura }}°C</p>

    <h3>Pronóstico de la semana</h3>

    <ul>
      <li v-for="(temp, index) in lugar.pronostico" :key="index">
        Día {{ index + 1 }}: {{ temp }}°C
      </li>
    </ul>

    <h3>Estadísticas</h3>

    <p>Mínima: {{ lugar.estadisticas.min }}°C</p>
    <p>Máxima: {{ lugar.estadisticas.max }}°C</p>
    <p>Promedio: {{ lugar.estadisticas.promedio }}°C</p>

    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>