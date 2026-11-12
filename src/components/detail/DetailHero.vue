<script setup>
/**
 * DetailHero — haut de la fiche : image de fond, affiche, titre, année, durée, genres, note, synopsis.
 * Tâche M3 · Arthur
 *
 * Props : movie (format MovieDetail, voir src/api/movies.js)
 * TODO M3 : fond tmdbImage(movie.backdropPath, 'w1280') ; visuels par défaut si une info manque ;
 * sur mobile l'affiche chevauche le bas du fond.
 */
defineProps({
  movie: { type: Object, required: true },
})
</script>

<template>
  <div class="container">
    <div class="stub">
      <h1>{{ movie.title }}</h1>
      DetailHero — {{ movie.year }} · {{ movie.runtime }} min · {{ movie.genres.join(', ') }}
    </div>
  </div>
</template>

<style scoped></style>
