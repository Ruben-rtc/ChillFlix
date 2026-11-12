<script setup>
/**
 * Fiche d'un film : /film/:id
 * Cette page ASSEMBLE seulement : chaque morceau est un composant avec sa propre tâche.
 * Tâche M2 · Arthur : chargement, erreur, « Film introuvable ».
 */
import { ref } from 'vue'
import { mockMovie } from '@/mocks/movie'
import DetailBreadcrumb from '@/components/detail/DetailBreadcrumb.vue'
import DetailHero from '@/components/detail/DetailHero.vue'
import BaseTabs from '@/components/ui/BaseTabs.vue'
import OverviewSection from '@/components/detail/OverviewSection.vue'
import TrailerPlayer from '@/components/detail/TrailerPlayer.vue'
import CastCarousel from '@/components/detail/CastCarousel.vue'
import RecommendationsCarousel from '@/components/detail/RecommendationsCarousel.vue'

defineProps({
  id: { type: String, required: true }, // vient de l'URL /film/:id
})

// TODO M2 · Arthur : remplacer la fausse fiche par getMovie(props.id) (src/api/movies.js),
// gérer loading / erreur / « Film introuvable », et recharger quand l'id change (watch).
const movie = ref(mockMovie)

const tabs = [
  { id: 'apercu', label: 'Aperçu' },
  { id: 'distribution', label: 'Distribution' },
  { id: 'recommandations', label: 'Recommandations' },
]
</script>

<template>
  <div class="movie-view">
    <div class="container">
      <DetailBreadcrumb :title="movie.title" />
    </div>

    <DetailHero :movie="movie" />

    <div class="container movie-view__sections">
      <BaseTabs :tabs="tabs" />

      <section id="apercu" aria-labelledby="titre-apercu">
        <h2 id="titre-apercu">Aperçu</h2>
        <OverviewSection :movie="movie" />
        <TrailerPlayer :trailer-key="movie.trailerKey" />
      </section>

      <section id="distribution" aria-labelledby="titre-distribution">
        <h2 id="titre-distribution">Distribution</h2>
        <CastCarousel :cast="movie.cast" />
      </section>

      <section id="recommandations" aria-labelledby="titre-recommandations">
        <h2 id="titre-recommandations">Recommandations</h2>
        <RecommendationsCarousel :movies="movie.recommendations" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.movie-view__sections {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  margin-top: var(--space-8);
}

section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
</style>
