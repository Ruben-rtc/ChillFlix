<script setup>
/**
 * EmptyState — « Aucun résultat » + bouton « Réinitialiser les filtres ».
 * Tâche R9 · Arthur
 *
 * Événement : reset
 */
defineEmits(['reset'])
</script>

<template>
  <div class="stub">
    EmptyState — Aucun résultat
    <button type="button" @click="$emit('reset')">Réinitialiser les filtres</button>
  </div>
</template>

<style scoped></style>
