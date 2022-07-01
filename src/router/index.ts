
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/especialidade',
    name: 'especialidade',
    component: () => import('../views/especialidade/especialidade-list.vue')

  },

  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../views/especialidade/cadastrar-especialidade.vue')

  },

  {
    path: '/cadastroconvenio',
    name: 'cadastroconvenio',
    component: () => import('../views/convenio/cadastrar-convenio.vue')

  },

  {
    path: '/cadastroespecialidade',
    name: 'cadastroespecialidade',
    component: () => import('../views/especialidade/cadastrar-especialidade.vue')

  },

  {
    path: '/cadastromedico',
    name: 'cadastromedico',
    component: () => import('../views/medico/cadastrar-medico.vue')

  },

  {
    path: '/cadastropaciente',
    name: 'cadastropaciente',
    component: () => import('../views/paciente/cadastrar-paciente.vue')

  },

  {
    path: '/cadastrosecretaria',
    name: 'cadastrosecretaria',
    component: () => import('../views/secretaria/cadastrar-secretaria.vue')

  },

  {
    path: '/cadastropaciente',
    name: 'cadastropaciente',
    component: () => import('../views/paciente/cadastrar-paciente.vue')

  },

  {
    path: '/convenio',
    name: 'convenio',
    component: () => import('../views/convenio/convenio-list.vue')

  },
  {
    path: '/medico',
    name: 'medico',
    component: () => import('../views/medico/medico-list.vue')

  },

  {
    path: '/paciente',
    name: 'paciente',
    component: () => import('../views/paciente/paciente-list.vue')

  },

  {
    path: '/secretaria',
    name: 'secretaria',
    component: () => import('../views/secretaria/secretaria-list.vue')

  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
