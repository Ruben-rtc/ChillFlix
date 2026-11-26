<script>
/**
 * ResultsHeader — « Résultats pour « dune » » + nombre de films.
 * Tâche R5 · Arthur
 *
 * Lit le store « search » (query, totalResults).
 */
import { mapState } from 'pinia'
import { useSearchStore } from '@/stores/search'

export default {
  name: 'ResultsHeader',
  computed: {
    // Lit query et totalResults dans le store : this.query, this.totalResults
    ...mapState(useSearchStore, ['query', 'totalResults']),

    // « 1 film », « 42 films », « 12’345 films » (0 et 1 au singulier en français)
    countLabel() {
      const n = this.totalResults
      const word = n > 1 ? 'films' : 'film'
      return `${n.toLocaleString('fr-CH')} ${word}`
    },
  },
}
</script>

<template>
  <div class="results-header">
    <h1>Résultats pour « {{ query }} »</h1>
    <!-- role="status" + aria-live : les lecteurs d'écran annoncent le nombre quand il change -->
    <p class="results-count" role="status" aria-live="polite">{{ countLabel }}</p>
  </div>
</template>

<style scoped>
/* Le h1 (Space Grotesk 32/40) est déjà stylé dans base.css */
.results-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2) var(--space-4);
}

.results-count {
  font-size: 14px;
  line-height: 20px;
  color: var(--cf-text-2);
}
</style>
