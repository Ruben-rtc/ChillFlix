<script setup>
/**
 * BaseCarousel — rangée horizontale avec flèches, réutilisée pour les acteurs et les recommandations.
 * Tâche M7 · Sellé
 *
 * Props : items — Slot : chaque élément, ex. <BaseCarousel :items="x" v-slot="{ item }">…</BaseCarousel>
 * TODO M7 : overflow-x: auto + scroll-snap ; flèches gauche/droite (scrollBy) cachées sur mobile.
 */
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <div class="stub">
    BaseCarousel
    <div v-for="(item, index) in items" :key="item.id ?? index">
      <slot :item="item" />
    </div>
  </div>
</template>

<style scoped></style>
