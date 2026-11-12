<script setup>
/**
 * BaseTabs — onglets de la fiche, collés sous le header au défilement.
 * Tâche M5 · Sellé
 *
 * Props : tabs = [{ id: 'apercu', label: 'Aperçu' }, …] (id = id de la section à atteindre)
 * TODO M5 : liens vers #id avec défilement fluide ; position: sticky; top: var(--header-height) ;
 * onglet actif souligné en rouge.
 */
defineProps({
  tabs: { type: Array, required: true },
})
</script>

<template>
  <nav class="stub" aria-label="Sections de la fiche">
    BaseTabs —
    <a v-for="tab in tabs" :key="tab.id" :href="`#${tab.id}`">{{ tab.label }} </a>
  </nav>
</template>

<style scoped></style>
