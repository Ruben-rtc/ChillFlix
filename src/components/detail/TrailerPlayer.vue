<script setup>
/**
 * TrailerPlayer — bande-annonce YouTube intégrée (16:9), ou message s'il n'y en a pas.
 * Tâche M6 · Arthur
 *
 * Props : trailerKey (clé YouTube ou null)
 * TODO M6 : <iframe :src="`https://www.youtube-nocookie.com/embed/${trailerKey}`" title="Bande-annonce" allowfullscreen>
 */
defineProps({
  trailerKey: { type: String, default: null },
})
</script>

<template>
  <div class="stub">TrailerPlayer — {{ trailerKey ?? 'Pas de bande-annonce disponible' }}</div>
</template>

<style scoped></style>
