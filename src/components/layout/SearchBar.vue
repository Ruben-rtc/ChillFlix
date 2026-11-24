<script setup>
/**
 * SearchBar — champ de recherche dans le header.
 * Tâche R4 · Ruben
 *
 * TODO R4 : v-model sur le texte ; Entrée → router.push({ path: '/recherche', query: { q } }) ;
 * ne rien faire si le texte est vide ; croix d'effacement ; préremplir avec route.query.q.
 */
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router' // Import pour searchbar

const router = useRouter()
const route = useRoute()
const searchText = ref('')
const onSubmit = () => {
  const query = searchText.value.trim() // nettoyer les espaces si il y a en a dans la barre de recherche
  if (!query) {
    // si il n'y a rien dans la recherche, ne rien faire
    return
  }
  router.push({ path: '/recherche', query: { q: query } })
}
// Préremplir le champ avec la recherche de l'adresse (/recherche?q=dune)
watch(
  () => route.query.q,
  (nouveauQ) => {
    searchText.value = nouveauQ ?? ''
  },
  { immediate: true },
)
</script>

<template>
  <form class="searchbar" role="search" @submit.prevent="onSubmit">
    <label class="visually-hidden" for="search-input">Rechercher un film</label>

    <!-- Loupe décorative, ignorée par les lecteurs d'écran -->
    <svg
      class="searchbar__icon"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>

    <input
      id="search-input"
      v-model="searchText"
      class="searchbar__input"
      type="search"
      placeholder="Rechercher un film…"
      autocomplete="off"
    />

    <button
      v-if="searchText"
      type="button"
      class="searchbar__clear"
      aria-label="Effacer la recherche"
      @click="searchText = ''"
    >
      ×
    </button>
  </form>
</template>

<style scoped>
/* Cadre : sert de repère pour placer la loupe et la croix par-dessus le champ */
.searchbar {
  position: relative;
  width: 100%;
  max-width: 340px;
  margin-inline: auto;
}

/* Champ : 340 × 44 px, fond sombre, bordure, rayon 10 px (maquette D1, point 5) */
.searchbar__input {
  width: 100%;
  height: 44px;
  padding: 0 40px; /* place pour la loupe à gauche et la croix à droite */
  background: var(--cf-surface-2);
  border: 1px solid var(--cf-border-2);
  border-radius: var(--radius);
  color: var(--cf-text);
  font-size: 14px;
  font-weight: 500;
}

.searchbar__input::placeholder {
  color: var(--cf-muted);
}

.searchbar__input:hover {
  border-color: var(--cf-muted);
}

/* Cache la croix automatique de Chrome/Edge (type="search") : on a la nôtre */
.searchbar__input::-webkit-search-cancel-button {
  display: none;
}

/* Loupe : à gauche, centrée verticalement */
.searchbar__icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: var(--cf-muted);
  pointer-events: none; /* un clic sur la loupe tombe dans le champ */
}

/* Croix : à droite, centrée verticalement, zone cliquable de 44 px */
.searchbar__clear {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  padding: 0;
  background: none;
  border: none;
  color: var(--cf-muted);
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}

.searchbar__clear:hover {
  color: var(--cf-text);
}
</style>
