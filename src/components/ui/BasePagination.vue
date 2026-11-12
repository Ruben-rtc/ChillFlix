<script setup>
/**
 * BasePagination — Précédent / numéros de page / Suivant.
 * Tâche R8 · Arthur
 *
 * Props : page, totalPages — Événement : change(nouvellePage)
 * TODO R8 : page courante en rouge avec aria-current="page" ; Précédent désactivé en page 1,
 * Suivant à la dernière page.
 */
defineProps({
  page: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})
defineEmits(['change'])
</script>

<template>
  <nav class="stub" aria-label="Pagination">BasePagination — page {{ page }} / {{ totalPages }}</nav>
</template>

<style scoped></style>
