import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmCharacters from '../components/DetailsComponents/FilmCharacters.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/characters',
    name: 'characters',
    component: FilmCharacters
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
