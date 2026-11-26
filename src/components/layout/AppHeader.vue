<script setup>
import SearchBar from '@/components/layout/SearchBar.vue'
</script>

/**
 * AppHeader — barre du haut, collée en haut au défilement (72 px).
 * Tâche F4 · Sellé
 *
 * Logo ChillFlix à gauche (lien vers '/'), emplacement de la recherche au centre,
 * bouton rond « Mon compte » (décoratif) à droite. Pas de lien « Ma collection ».
 */

<template>
  <header class="app-header">
    <div class="container app-header__inner">
      <RouterLink to="/" class="app-header__logo" aria-label="ChillFlix, retour à l'accueil">
        ChillFlix
      </RouterLink>

      <div class="app-header__search"><SearchBar /></div>

      <button type="button" class="app-header__account" aria-label="Mon compte">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 10;
  height: var(--header-height);
  background: var(--cf-header);
  border-bottom: 1px solid var(--cf-border);
}

.app-header__inner {
  display: flex;
  align-items: center;
  gap: var(--gutter);
  height: 100%;
}

.app-header__logo {
  flex: none;
  color: var(--cf-red);
  font-family: var(--font-title);
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.01em;
}

.app-header__search {
  flex: 1;
  min-width: 0;
  max-width: 560px;
  margin-inline: auto;
}

.app-header__account {
  flex: none;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-left: auto;
  padding: 0;
  background: var(--cf-surface-2);
  border: 1px solid var(--cf-border-2);
  border-radius: var(--radius-pill);
  color: var(--cf-text-2);
  cursor: pointer;
}

.app-header__account:hover {
  background: var(--cf-surface);
  color: var(--cf-text);
}

/* Quand la recherche est présente, le bouton n'a plus besoin de la marge auto */
.app-header__search:not(:empty) + .app-header__account {
  margin-left: 0;
}
</style>
