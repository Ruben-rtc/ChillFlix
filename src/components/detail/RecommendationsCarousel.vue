<script setup>
/**
 * RecommendationsCarousel — films recommandés, en MediaCard dans un BaseCarousel.
 * Tâche M8 · Sellé
 *
 * Props : movies (MovieCard[])
 * TODO M8 : ne rien afficher si la liste est vide.
 */
import BaseCarousel from '@/components/ui/BaseCarousel.vue'
import MediaCard from '@/components/ui/MediaCard.vue'

defineProps({
  movies: { type: Array, required: true },
})
</script>

<template>
  <BaseCarousel v-slot="{ item }" :items="movies">
    <MediaCard :item="item" />
  </BaseCarousel>
</template>

<style scoped></style>
