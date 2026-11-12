/**
 * Store de la recherche : la « boîte » partagée par toute la page de résultats.
 * SearchFilters écrit dedans, ResultsGrid / ResultsHeader / BasePagination lisent dedans.
 * Règle : l'URL (/recherche?q=dune&genre=878&annee=2021&tri=rating&page=2) est la source de vérité,
 * SearchView copie l'URL dans ce store puis appelle fetchResults().
 * Tâche F5 · Ruben (forme du store) — R3, FI4, T1/T2 pour les actions.
 */
import { defineStore } from 'pinia'
import { mockMovies } from '@/mocks/movies'

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
    genre: null, // id TMDB du genre, ex. 878
    year: null, // ex. 2021
    sort: null, // null = défaut (pertinence avec texte, popularité sans texte)
    page: 1,
    // TODO R3 : remplacer les fausses données par [] quand fetchResults marche
    results: mockMovies,
    totalResults: mockMovies.length,
    totalPages: 1,
    loading: false,
    error: null,
  }),

  getters: {
    hasFilters: (state) => state.genre !== null || state.year !== null,
  },

  actions: {
    /** Tâche R3 · Ruben (puis FI4 et T1/T2 pour les filtres et le tri) */
    async fetchResults() {
      // TODO R3 : loading = true ; appeler searchMovies (ou discoverMovies sans texte) ;
      // remplir results / totalResults / totalPages ; en cas d'erreur, error = message ; loading = false
    },

    /** Tâche FI4 · Ruben — appelé par « Tout effacer » et « Réinitialiser les filtres » */
    resetFilters() {
      // TODO FI4 : retirer genre et année de l'URL (router.push), ce qui relancera la recherche
    },
  },
})
