<script setup>
/**
 * Page de résultats : /recherche?q=…&genre=…&annee=…&tri=…&page=…
 * Cette page ASSEMBLE seulement : chaque morceau est un composant avec sa propre tâche.
 * Les données passent par le store « search » (src/stores/search.js).
 */
import { useRoute, useRouter } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import ResultsHeader from '@/components/search/ResultsHeader.vue'
import SearchFilters from '@/components/search/SearchFilters.vue'
import ActiveFilters from '@/components/search/ActiveFilters.vue'
import ResultsGrid from '@/components/search/ResultsGrid.vue'
import BasePagination from '@/components/ui/BasePagination.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import ErrorState from '@/components/ui/ErrorState.vue'

const store = useSearchStore()
const route = useRoute()
const router = useRouter()

// TODO R3 · Ruben : lire route.query (q, page, genre, annee, tri), les copier dans le store,
// appeler store.fetchResults(), et recommencer à chaque changement de l'URL (watch).

/**
 * Tâche R8 · Arthur — appelé par BasePagination quand on clique sur une page.
 * On change seulement « page » dans l'URL et on garde le reste (q, genre, annee, tri).
 * C'est R3 qui voit le changement d'URL et recharge les résultats.
 */
async function onPageChange(page) {
  await router.push({ query: { ...route.query, page: page } })

  // Remonter en haut pour voir les premiers résultats de la nouvelle page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="container search-view">
    <ResultsHeader />
    <SearchFilters />
    <ActiveFilters />

    <ErrorState v-if="store.error" :message="store.error" @retry="store.fetchResults()" />
    <EmptyState
      v-else-if="!store.loading && store.results.length === 0"
      @reset="store.resetFilters()"
    />
    <ResultsGrid v-else />

    <BasePagination :page="store.page" :total-pages="store.totalPages" @change="onPageChange" />
  </div>
</template>

<style scoped>
.search-view {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}
</style>
