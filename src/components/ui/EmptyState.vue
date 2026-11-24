<script setup>
/**
 * EmptyState — « Aucun résultat » + bouton « Réinitialiser les filtres ».
 * Tâche R9 · Arthur
 *
 * Affiché par SearchView quand la recherche est terminée et ne renvoie aucun film.
 * Événement : reset
 */
const emit = defineEmits(['reset'])

function onResetClick() {
  emit('reset')
}
</script>

<template>
  <div class="empty-state">
    <!-- Icône décorative (loupe barrée) : cachée aux lecteurs d'écran -->
    <svg
      class="empty-state-icon"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
      <line x1="8" y1="8" x2="14" y2="14" />
    </svg>

    <h2 class="empty-state-title">Aucun résultat</h2>
    <p class="empty-state-text">Essayez un autre titre ou retirez des filtres</p>

    <button type="button" class="empty-state-btn" @click="onResetClick">
      Réinitialiser les filtres
    </button>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-12) var(--space-4);
  text-align: center;
}

.empty-state-icon {
  color: var(--cf-muted);
  margin-bottom: var(--space-2);
}

/* Le h2 (Space Grotesk 24/32) est déjà stylé dans base.css */

.empty-state-text {
  color: var(--cf-text-2);
}

/* Bouton secondaire : contour, fond transparent */
.empty-state-btn {
  margin-top: var(--space-3);
  height: 44px;
  padding: 0 var(--space-6);
  border: 1px solid var(--cf-border-2);
  border-radius: var(--radius);
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.empty-state-btn:hover {
  background: var(--cf-surface-2);
}
</style>
