import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // L'accueil affiche la liste des films (populaires tant qu'on n'a rien cherché)
    { path: '/', redirect: { name: 'search' } },
    // /recherche?q=dune&genre=878&annee=2021&tri=rating&page=2
    { path: '/recherche', name: 'search', component: SearchView },
    // /film/438631 — l'id arrive en prop dans MovieView
    {
      path: '/film/:id(\\d+)',
      name: 'movie',
      component: () => import('../views/MovieView.vue'),
      props: true,
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Retour navigateur : revenir où on était. Ancre (#distribution) : y descendre sous le header.
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 130, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
