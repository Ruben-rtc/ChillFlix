/** Adresse d'une image TMDB. Tailles utiles : w185 (acteurs), w342 (affiches), w1280 (fonds). */
export const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p'

export function tmdbImage(path, size = 'w342') {
  if (!path) return null
  return `${TMDB_IMAGE_BASE}/${size}${path}`
}
