<script setup>
/**
 * CardSkeleton — carte grise de la taille d'une MediaCard, affichée pendant le chargement.
 * Tâche R6 · Sellé
 */
</script>

<template>
  <div class="skeleton" aria-hidden="true">
    <div class="poster"></div>
    <div class="line title"></div>
    <div class="line meta"></div>
  </div>
</template>

<style scoped>
.skeleton {
  min-width: 0;
  animation: pulse 1.4s ease-in-out infinite;
}

.poster {
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: var(--radius);
  background: var(--cf-surface-2);
}

.line {
  height: 14px;
  margin-top: var(--space-2);
  border-radius: var(--radius-tag);
  background: var(--cf-surface-2);
}

.title {
  width: 80%;
}

.meta {
  width: 45%;
  margin-top: var(--space-1);
}

@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
  }
}
</style>
