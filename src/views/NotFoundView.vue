<script setup>
/** Page 404 : adresse inconnue. */
</script>

<template>
  <div class="container not-found">
    <h1>Page introuvable</h1>
    <p>Cette adresse n'existe pas.</p>
    <RouterLink to="/" class="not-found__link">Retour à l'accueil</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding-block: var(--space-16);
}

.not-found__link {
  color: var(--cf-red-text);
  font-weight: 600;
  text-decoration: underline;
}
</style>
