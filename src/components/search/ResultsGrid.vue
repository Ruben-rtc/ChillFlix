<script>
/**
 * ResultsGrid — grille de MediaCard (6 colonnes ordi, 4 tablette, 2 mobile).
 * Tâche R7 · Sellé
 *
 * Lit le store « search » (results, loading) : this.searchStore dans le script,
 * searchStore dans le template.
 */
import { mapStores } from 'pinia'
import { useSearchStore } from '@/stores/search'
import MediaCard from '@/components/ui/MediaCard.vue'
import CardSkeleton from '@/components/ui/CardSkeleton.vue'

export default {
  name: 'ResultsGrid',

  components: { MediaCard, CardSkeleton },

  computed: {
    ...mapStores(useSearchStore), // donne this.searchStore
  },
}
</script>

<template>
  <div class="results-grid">
    <template v-if="searchStore.loading">
      <CardSkeleton v-for="n in 12" :key="n" />
    </template>
    <template v-else>
      <MediaCard v-for="film in searchStore.results" :key="film.id" :item="film" />
    </template>
  </div>
</template>

<style scoped>
.results-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px 16px;
}

@media (min-width: 600px) {
  .results-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 32px 24px;
  }
}

@media (min-width: 1024px) {
  .results-grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}
</style>
