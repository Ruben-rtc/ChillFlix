<script setup>
/**
 * FilterChip — pastille d'un filtre actif avec une croix pour le retirer.
 * Tâche FI5 · Sellé
 *
 * Props : label (ex. « Genre : Science-Fiction ») — Événement : remove
 * TODO FI5 : pilule 36 px ; la croix est un vrai bouton avec aria-label « Retirer le filtre … ».
 */
defineProps({
  label: { type: String, required: true },
})
defineEmits(['remove'])
</script>

<template>
  <span class="stub">
    {{ label }}
    <button type="button" :aria-label="`Retirer le filtre ${label}`" @click="$emit('remove')">×</button>
  </span>
</template>

<style scoped></style>
