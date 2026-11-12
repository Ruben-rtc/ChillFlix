<script setup>
/**
 * ErrorState — message d'erreur + bouton « Réessayer ».
 * Tâche R9 · Arthur
 *
 * Props : message — Événement : retry
 */
defineProps({
  message: { type: String, default: 'Impossible de charger les films.' },
})
defineEmits(['retry'])
</script>

<template>
  <div class="stub" role="alert">
    ErrorState — {{ message }}
    <button type="button" @click="$emit('retry')">Réessayer</button>
  </div>
</template>

<style scoped></style>
