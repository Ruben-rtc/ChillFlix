<script setup>
/**
 * SearchBar — champ de recherche dans le header.
 * Tâche R4 · Ruben
 *
 * TODO R4 : v-model sur le texte ; Entrée → router.push({ path: '/recherche', query: { q } }) ;
 * ne rien faire si le texte est vide ; croix d'effacement ; préremplir avec route.query.q.
 */
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Import pour searchbar

const router = useRouter()
const searchText = ref('')
const onSubmit = () => {
  const query = searchText.value.trim() // nettoyer les espaces si il y a en a dans la barre de recherche
    if (!query) {                       // si il n'y a rien dans la recherche, ne rien faire
      return
    }
  router.push({ path: '/recherche', query : { q: query} })
}

</script>

<template>
  <form class="searchbar" @submit.prevent="onSubmit">
    <label class="visually-hidden" for="search-input">Rechercher un Film...:</label>
    <input placeholder="Rechercher un film" type="search" id="search-input" v-model="searchText" />
  </form>
</template>

<style scoped></style>
