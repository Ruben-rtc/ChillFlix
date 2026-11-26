<script setup>
/**
 * MediaCard — carte d'un film : affiche 2:3, titre, année, note.
 * Tâche R6 · Sellé
 *
 * Props : item (format MovieCard, voir src/api/search.js)
 */
import { computed } from 'vue'
import { tmdbImage } from '@/utils/image'
import noPoster from '@/assets/no-poster.svg'

const props = defineProps({
  item: { type: Object, required: true },
})

const poster = computed(() => tmdbImage(props.item.posterPath) ?? noPoster)
const rating = computed(() =>
  typeof props.item.rating === 'number' ? props.item.rating.toFixed(1) : null,
)
</script>

<template>
  <RouterLink :to="`/film/${item.id}`" class="media-card">
    <img class="poster" :src="poster" :alt="item.title" loading="lazy" />
    <div class="info">
      <p class="title" :title="item.title">{{ item.title }}</p>
      <p class="meta">
        <span v-if="item.year">{{ item.year }}</span>
        <template v-if="rating">
          <span v-if="item.year" aria-hidden="true">·</span>
          <svg class="star" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
          <span>{{ rating }}</span>
        </template>
      </p>
    </div>
  </RouterLink>
</template>

<style scoped>
.media-card {
  display: block;
  min-width: 0;
  color: var(--cf-text);
  text-decoration: none;
  outline: none;
}

.poster {
  display: block;
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: var(--radius);
  background: var(--cf-surface-2);
}

.media-card:hover .poster,
.media-card:focus-visible .poster {
  outline: 2px solid #fff;
  outline-offset: 0;
}

.info {
  padding-top: var(--space-2);
}

.title {
  margin: 0;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.meta {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin: var(--space-1) 0 0;
  font-size: 14px;
  color: var(--cf-text-2);
}

.star {
  color: var(--cf-star);
}
</style>
