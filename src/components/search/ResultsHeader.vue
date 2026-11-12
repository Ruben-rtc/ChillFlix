<script setup>
/**
 * ResultsHeader — « Résultats pour « dune » » + nombre de films.
 * Tâche R5 · Arthur
 *
 * Lit le store « search » (query, totalResults).
 * TODO R5 : h1 + compteur dans role="status" aria-live="polite".
 */
import { useSearchStore } from '@/stores/search'

const store = useSearchStore()
</script>

<template>
  <div class="stub">ResultsHeader — « {{ store.query }} » · {{ store.totalResults }} films</div>
</template>

<style scoped></style>
