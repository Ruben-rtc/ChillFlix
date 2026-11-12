<script setup>
/**
 * DetailBreadcrumb — Accueil > Résultats > Titre du film, + bouton Retour.
 * Tâche M4 · Arthur
 *
 * Props : title
 * TODO M4 : « Résultats » ramène à la dernière recherche (filtres conservés) ; Retour = router.back().
 */
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <nav class="stub" aria-label="Fil d'Ariane">
    <RouterLink to="/">Accueil</RouterLink> › Résultats › <span aria-current="page">{{ title }}</span>
  </nav>
</template>

<style scoped></style>
