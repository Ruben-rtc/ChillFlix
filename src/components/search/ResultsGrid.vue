<script>
/**
 * ResultsGrid — grille de MediaCard (6 colonnes ordi, 4 tablette, 2 mobile).
 * Tâche R7 · Sellé
 *
 * Lit le store « search » (results, loading) : this.searchStore dans le script,
 * searchStore dans le template.
 * TODO R7 : display: grid ; 12 CardSkeleton pendant le chargement.
 */
import { mapStores } from 'pinia'
import { useSearchStore } from '@/stores/search'
import MediaCard from '@/components/ui/MediaCard.vue'

export default {
  name: 'ResultsGrid',
  components: { MediaCard },
  computed: {
    ...mapStores(useSearchStore), // donne this.searchStore
  },
}
</script>

<template>
  <div class="stub">
    ResultsGrid
    <MediaCard v-for="movie in searchStore.results" :key="movie.id" :item="movie" />
  </div>
</template>

<style scoped></style>
