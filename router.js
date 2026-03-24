import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import DetalleLugar from './views/DetalleLugar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/lugar/:id',
    name: 'detalle',
    component: DetalleLugar
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router