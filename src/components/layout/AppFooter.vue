<script>
/**
 * AppFooter — pied de page avec la mention TMDB (obligatoire).
 * Tâche F4 · Sellé
 * Règles du logo : https://www.themoviedb.org/about/logos-attribution
 */
import tmdbLogo from '@/assets/tmdb-logo.svg'

export default {
  name: 'AppFooter',
  data() {
    return {
      tmdbLogo, // adresse de l'image, utilisée dans <img :src="tmdbLogo">
    }
  },
}
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__inner">
      <a href="https://www.themoviedb.org/" target="_blank" rel="noopener" class="app-footer__logo">
        <img :src="tmdbLogo" alt="TMDB" width="92" height="66" />
      </a>
      <p class="app-footer__text">
        Ce produit utilise l'API TMDB mais n'est ni approuvé ni certifié par TMDB
      </p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--cf-header);
  border-top: 1px solid var(--cf-border);
  padding-block: var(--space-8);
}

.app-footer__inner {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.app-footer__logo {
  flex: none;
  display: block;
  border-radius: var(--radius-tag);
}

.app-footer__logo img {
  width: 92px;
  height: auto;
}

.app-footer__text {
  color: var(--cf-text-2);
  font-size: 14px;
  line-height: 20px;
}

@media (max-width: 599px) {
  .app-footer__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }
}
</style>
