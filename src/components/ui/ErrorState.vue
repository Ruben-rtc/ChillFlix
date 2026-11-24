<script setup>
/**
 * ErrorState — « Impossible de charger les films » + bouton « Réessayer ».
 * Tâche R9 · Arthur
 *
 * Affiché par SearchView quand store.error est rempli (API injoignable, wifi coupé…).
 * Props : message (détail technique, facultatif) — Événement : retry
 */
defineProps({
  message: { type: String, default: '' },
})

const emit = defineEmits(['retry'])

function onRetryClick() {
  emit('retry')
}
</script>

<template>
  <!-- role="alert" : le lecteur d'écran annonce l'erreur dès qu'elle apparaît -->
  <div class="error-state" role="alert">
    <h2 class="error-state-title">Impossible de charger les films</h2>

    <!-- Détail technique (ex. « Network Error »), seulement s'il y en a un -->
    <p v-if="message" class="error-state-detail">{{ message }}</p>

    <button type="button" class="error-state-btn" @click="onRetryClick">Réessayer</button>
  </div>
</template>

<style scoped>
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-12) var(--space-4);
  text-align: center;
}

/* Le h2 (Space Grotesk 24/32) est déjà stylé dans base.css */

.error-state-detail {
  font-size: 14px;
  line-height: 20px;
  color: var(--cf-muted);
}

/* Bouton principal : « Réessayer » est la seule action utile ici */
.error-state-btn {
  margin-top: var(--space-3);
  height: 44px;
  padding: 0 var(--space-6);
  border: none;
  border-radius: var(--radius);
  background: var(--cf-red);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.error-state-btn:hover {
  background: var(--cf-red-hover);
}

.error-state-btn:active {
  background: var(--cf-red-press);
}
</style>
