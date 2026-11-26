/**
 * Store de la recherche : la « boîte » partagée par toute la page de résultats.
 * SearchFilters écrit dedans, ResultsGrid / ResultsHeader / BasePagination lisent dedans.
 * Règle : l'URL (/recherche?q=dune&genre=878&annee=2021&tri=rating&page=2) est la source de vérité,
 * SearchView copie l'URL dans ce store puis appelle fetchResults().
 * Tâche F5 · Ruben (forme du store) — R3, FI4, T1/T2 pour les actions.
 */
import { defineStore } from 'pinia'
import { searchMovies } from '@/api/search'

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
    genre: null, // id TMDB du genre, ex. 878
    year: null, // ex. 2021
    sort: null, // null = défaut (pertinence avec texte, popularité sans texte)
    page: 1,
    // TODO R3 : remplacer les fausses données par [] quand fetchResults marche
    results: [],
    totalResults: 0,
    totalPages: 0,
    loading: false,
    error: null,
  }),

  getters: {
    hasFilters: (state) => state.genre !== null || state.year !== null,
  },

  actions: {
    async fetchResults() {
      this.loading = true
      this.error = null

      try {
        // Appel à TMDB : on attend la réponse avant de continuer
        const response = await searchMovies(this.query, this.page) //Action Pinia, l'état s'apelle this avec les 2 arguments de la fonction

        // ranger la réponse dans le store
        this.results = response.results
        this.totalResults = response.totalResults
        this.totalPages = response.totalPages
      } catch (e) {
        // attraper l'erreur, on garde le message pour ErrorState
        this.error = e.message
      } finally {
        // Dans tous les cas le chargement est terminé
        this.loading = false
      }
    },

    /** Tâche FI4 · Ruben — appelé par « Tout effacer » et « Réinitialiser les filtres » */
    resetFilters() {
      // TODO FI4 : retirer genre et année de l'URL (router.push), ce qui relancera la recherche
    },
  },
})
