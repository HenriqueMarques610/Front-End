import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/About.vue'
import personagens from '../views/personagens.vue'
import personagem from '../views/personagem.vue'
import episodios from '../views/episodios.vue'
import episodio from '../views/episodio.vue'
import locais from '../views/locais.vue'
import local from '../views/local.vue'
import citacoes from '../views/citacoes.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import error from '../views/error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personagem/:id',
    component: personagem
  },
  {
    path: '/personagens',
    component: personagens
  },
  {
    path: '/episodios',
    component: episodios
  },
  {
    path: '/episodio/:id',
    component: episodio
  },
  {
    path: '/locais',
    component: locais
  },
  {
    path: '/local/:id',
    component: local
  },
  {
    path: '/citacoes',
    component: citacoes
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register,
  },
  {
    path: "*",
    component: error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
