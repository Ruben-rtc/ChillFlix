<script setup>
/**
 * AppHeader — barre du haut, collée en haut au défilement (72 px).
 * Tâche F4 · Sellé
 *
 * TODO F4 : logo ChillFlix (lien vers '/'), SearchBar au centre, bouton rond « Mon compte » à droite
 * (aria-label). Fond var(--cf-header), filet bas 1 px var(--cf-border). Pas de lien « Ma collection ».
 */
import SearchBar from './SearchBar.vue'
</script>

<template>
  <header class="stub">
    <RouterLink to="/">ChillFlix</RouterLink>
    <SearchBar />
  </header>
</template>

<style scoped></style>
