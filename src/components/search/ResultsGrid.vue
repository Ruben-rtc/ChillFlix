<script setup>
/**
 * ResultsGrid — grille de MediaCard (6 colonnes ordi, 4 tablette, 2 mobile).
 * Tâche R7 · Sellé
 *
 * Lit le store « search » (results, loading).
 * TODO R7 : display: grid ; 12 CardSkeleton pendant le chargement.
 */
import { useSearchStore } from '@/stores/search'
import MediaCard from '@/components/ui/MediaCard.vue'

const store = useSearchStore()
</script>

<template>
  <div class="stub">
    ResultsGrid
    <MediaCard v-for="movie in store.results" :key="movie.id" :item="movie" />
  </div>
</template>

<style scoped></style>
