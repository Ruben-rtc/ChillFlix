<script>
/**
 * Page de résultats : /recherche?q=…&genre=…&annee=…&tri=…&page=…
 * Cette page ASSEMBLE seulement : chaque morceau est un composant avec sa propre tâche.
 * Les données passent par le store « search » (src/stores/search.js) :
 * this.searchStore dans le script, searchStore dans le template.
 */
import { mapStores } from 'pinia'
import { useSearchStore } from '@/stores/search'
import ResultsHeader from '@/components/search/ResultsHeader.vue'
import SearchFilters from '@/components/search/SearchFilters.vue'
import ActiveFilters from '@/components/search/ActiveFilters.vue'
import ResultsGrid from '@/components/search/ResultsGrid.vue'
import BasePagination from '@/components/ui/BasePagination.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import ErrorState from '@/components/ui/ErrorState.vue'

export default {
  name: 'SearchView',

  components: {
    ResultsHeader,
    SearchFilters,
    ActiveFilters,
    ResultsGrid,
    BasePagination,
    EmptyState,
    ErrorState,
  },

  computed: {
    ...mapStores(useSearchStore), // donne this.searchStore
  },

  // l'option' watch surveille l'adresse du navigateur, il surveille ce qu'il y a après le ? dans l'adresse
  watch: {
    '$route.query': {
      handler(newQuery) {
        // 1. Le texte cherché (vide si il n'y a pas de q dans l'adresse)
        this.searchStore.query = newQuery.q ?? '' // ?? si ça n'existe pas, alors pas de texte dans la barre de recherche

        // 2. La page en nombre (1 s'il n'y a en a pas)
        this.searchStore.page = Number(newQuery.page) || 1 // transforme la page de l'adresse en nombre. Si ce n'est pas un nombre valide, ou s'il n'y a pas de page, prends 1

        // 3. Recherche vide : on ne fait rien
        if (!this.searchStore.query) return

        // 4. Sinon : on charge les films
        this.searchStore.fetchResults()
      },
      immediate: true, // Vue exécute le handler une première fois quand la page se crée
    },
  },

  // appeler this.searchStore.fetchResults(), et recommencer à chaque changement de l'URL
  // (option watch sur '$route.query', avec immediate: true).

  methods: {
    /**
     * Tâche R8 · Arthur — appelé par BasePagination quand on clique sur une page.
     * On change seulement « page » dans l'URL et on garde le reste (q, genre, annee, tri).
     * C'est R3 qui voit le changement d'URL et recharge les résultats.
     */
    async onPageChange(page) {
      await this.$router.push({ query: { ...this.$route.query, page: page } })

      // Remonter en haut pour voir les premiers résultats de la nouvelle page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<template>
  <div class="container search-view">
    <ResultsHeader />
    <SearchFilters />
    <ActiveFilters />

    <ErrorState
      v-if="searchStore.error"
      :message="searchStore.error"
      @retry="searchStore.fetchResults()"
    />
    <EmptyState
      v-else-if="!searchStore.loading && searchStore.results.length === 0"
      @reset="searchStore.resetFilters()"
    />
    <ResultsGrid v-else />

    <BasePagination
      :page="searchStore.page"
      :total-pages="searchStore.totalPages"
      @change="onPageChange"
    />
  </div>
</template>

<style scoped>
.search-view {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}
</style>
