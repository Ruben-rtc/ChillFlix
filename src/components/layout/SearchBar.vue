<script setup>
/**
 * SearchBar — champ de recherche dans le header.
 * Tâche R4 · Ruben
 *
 * TODO R4 : v-model sur le texte ; Entrée → router.push({ path: '/recherche', query: { q } }) ;
 * ne rien faire si le texte est vide ; croix d'effacement ; préremplir avec route.query.q.
 */
import { ref } from 'vue'
const searchText = ref('')
const onSubmit = () => {
  console.log(searchText.value)
}
</script>

<template>
  <form class="searchbar" @submit.prevent="onSubmit">
    <label class="visually-hidden" for="search-input">Rechercher un Film...:</label>
    <input placeholder="Rechercher un film" type="search" id="search-input" v-model="searchText" />
  </form>
</template>

<style scoped></style>
