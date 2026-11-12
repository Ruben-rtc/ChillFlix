/**
 * Liste des genres de films, chargée une seule fois.
 * Tâche FI1 · Ruben
 */
import { defineStore } from 'pinia'

export const useGenresStore = defineStore('genres', {
  state: () => ({
    list: [], // [{ id: 878, name: 'Science-Fiction' }, …]
  }),

  getters: {
    nameById: (state) => (id) => state.list.find((g) => g.id === Number(id))?.name ?? '',
  },

  actions: {
    async load() {
      // TODO FI1 : si list est déjà rempli, ne rien faire ; sinon list = await getMovieGenres()
    },
  },
})
