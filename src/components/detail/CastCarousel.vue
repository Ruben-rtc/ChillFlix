<script setup>
/**
 * CastCarousel — acteurs du film (photo, nom, rôle), dans un BaseCarousel. Non cliquables.
 * Tâche M8 · Sellé
 *
 * Props : cast = [{ id, name, character, profilePath }]
 */
import BaseCarousel from '@/components/ui/BaseCarousel.vue'

defineProps({
  cast: { type: Array, required: true },
})
</script>

<template>
  <BaseCarousel v-slot="{ item }" :items="cast">
    <div class="stub">{{ item.name }} — {{ item.character }}</div>
  </BaseCarousel>
</template>

<style scoped></style>
