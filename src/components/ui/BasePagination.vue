<script setup>
/**
 * BasePagination — Précédent / numéros de page / Suivant.
 * Tâche R8 · Arthur
 *
 * Props : page, totalPages — Événement : change(nouvellePage)
 */
import { computed } from 'vue'

const props = defineProps({
  page: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})

const emit = defineEmits(['change'])

function goTo(n) {
  if (n < 1 || n > props.totalPages || n === props.page) return
  emit('change', n)
}

/**
 * Numéros à afficher : toujours la première et la dernière page,
 * plus la page actuelle et ses voisines. Un trou de plusieurs pages devient « … ».
 * Ex. page 5 sur 20 → [1, '…', 4, 5, 6, '…', 20]
 */
const items = computed(function () {
  const total = props.totalPages
  const current = props.page

  // 1. Les pages qu'on veut voir : la première, la page actuelle et ses voisines, la dernière
  const wanted = [1, current - 1, current, current + 1, total]

  // 2. On garde seulement les pages qui existent, sans doublon
  const pages = []
  for (let i = 0; i < wanted.length; i++) {
    const n = wanted[i]
    const existe = n >= 1 && n <= total
    const dejaAjoutee = pages.includes(n)
    if (existe && !dejaAjoutee) {
      pages.push(n)
    }
  }

  // 3. On les trie dans l'ordre croissant
  pages.sort(function (a, b) {
    return a - b
  })

  // 4. On ajoute « … » là où il manque des pages
  const result = []
  let previous = 0
  for (let i = 0; i < pages.length; i++) {
    const n = pages[i]
    const ecart = n - previous

    if (ecart === 2) {
      // Une seule page manquante : on l'affiche plutôt que « … »
      result.push(previous + 1)
    } else if (ecart > 2) {
      // Plusieurs pages manquantes : on les remplace par « … »
      result.push('…')
    }

    result.push(n)
    previous = n
  }

  return result
})

/** Vrai si ce numéro est la page affichée. */
function isCurrent(item) {
  return item === props.page
}

/** « Précédent » est inutile sur la première page. */
const isFirstPage = computed(function () {
  return props.page <= 1
})

/** « Suivant » est inutile sur la dernière page. */
const isLastPage = computed(function () {
  return props.page >= props.totalPages
})
</script>

<template>
  <!-- Pas de pagination s'il n'y a qu'une page -->
  <nav v-if="totalPages > 1" class="pagination" aria-label="Pagination">
    <ul class="pagination-list">
      <li>
        <button
          type="button"
          class="pagination-btn"
          :disabled="isFirstPage"
          @click="goTo(page - 1)"
        >
          Précédent
        </button>
      </li>

      <li v-for="(item, index) in items" :key="`${item}-${index}`">
        <span v-if="item === '…'" class="pagination-ellipsis" aria-hidden="true">…</span>
        <button
          v-else
          type="button"
          class="pagination-btn pagination-number"
          :aria-label="`Page ${item}`"
          :aria-current="isCurrent(item) ? 'page' : undefined"
          @click="goTo(item)"
        >
          {{ item }}
        </button>
      </li>

      <li>
        <button
          type="button"
          class="pagination-btn"
          :disabled="isLastPage"
          @click="goTo(page + 1)"
        >
          Suivant
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--space-2);
  padding: 0;
  list-style: none;
}

.pagination-btn {
  min-width: 44px;
  height: 44px;
  padding: 0 var(--space-4);
  border: 1px solid var(--cf-border);
  border-radius: var(--radius);
  background: var(--cf-surface);
  font-size: 14px;
  cursor: pointer;
}

.pagination-btn:hover:not(:disabled) {
  background: var(--cf-surface-2);
  border-color: var(--cf-border-2);
}

/* Page actuelle : fond rouge. Le style suit aria-current, donc visuel et accessibilité restent liés. */
.pagination-btn[aria-current='page'] {
  background: var(--cf-red);
  border-color: var(--cf-red);
  color: var(--cf-text);
  font-weight: 600;
}

.pagination-btn[aria-current='page']:hover {
  background: var(--cf-red-hover);
  border-color: var(--cf-red-hover);
}

/* Précédent en page 1, Suivant à la dernière page */
.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Les numéros sont des carrés de 44 × 44 px */
.pagination-number {
  padding: 0;
}

.pagination-ellipsis {
  min-width: 24px;
  text-align: center;
  color: var(--cf-muted);
}
</style>
