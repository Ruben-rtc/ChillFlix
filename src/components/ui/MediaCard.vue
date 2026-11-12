<script setup>
/**
 * MediaCard — carte d'un film : affiche 2:3, titre, année, note.
 * Tâche R6 · Sellé
 *
 * Props : item (format MovieCard, voir src/api/search.js)
 * TODO R6 : toute la carte = <RouterLink :to="`/film/${item.id}`"> ; affiche avec tmdbImage(item.posterPath)
 * (src/utils/image.js), image par défaut si null ; titre sur 1 ligne tronquée ; étoile var(--cf-star).
 */
defineProps({
  item: { type: Object, required: true },
})
</script>

<template>
  <RouterLink :to="`/film/${item.id}`" class="stub">
    MediaCard — {{ item.title }} ({{ item.year }}) · {{ item.rating }}
  </RouterLink>
</template>

<style scoped></style>
