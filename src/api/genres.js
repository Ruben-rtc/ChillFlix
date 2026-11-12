/**
 * Liste des genres de films en français (878 = Science-Fiction…).
 * Tâche FI1 · Ruben
 */
// oxlint-disable-next-line no-unused-vars -- à enlever quand la tâche TODO est faite
import { tmdb } from './tmdb'

/** @returns {Promise<{ id: number, name: string }[]>} */
export async function getMovieGenres() {
  // TODO FI1 : const { data } = await tmdb.get('/genre/movie/list') ; return data.genres
  throw new Error('getMovieGenres : tâche FI1 pas encore faite')
}
