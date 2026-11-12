<script setup>
/**
 * OverviewSection — infos détaillées : date de sortie, durée, genres, note et votes.
 * Tâche M6 · Arthur
 *
 * Props : movie (MovieDetail)
 */
defineProps({
  movie: { type: Object, required: true },
})
</script>

<template>
  <div class="stub">OverviewSection — sortie le {{ movie.releaseDate }}</div>
</template>

<style scoped></style>
