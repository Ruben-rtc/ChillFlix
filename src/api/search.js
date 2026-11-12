/**
 * Recherche et liste de films.
 *
 * FORMAT COMMUN d'un film dans une liste (utilisé par MediaCard, ResultsGrid, carrousels) :
 * @typedef {Object} MovieCard
 * @property {number} id
 * @property {'movie'} type
 * @property {string} title
 * @property {string} year         ex. '2021' ('' si inconnue)
 * @property {string|null} posterPath  ex. '/abc.jpg' → utiliser tmdbImage() de src/utils/image.js
 * @property {number} rating        note sur 10
 * @property {number} voteCount
 * @property {number} popularity
 * @property {number[]} genreIds
 * @property {string} releaseDate   ex. '2021-09-15'
 */
// oxlint-disable-next-line no-unused-vars -- à enlever quand la tâche TODO est faite
import { tmdb } from './tmdb'

/**
 * Transforme un film renvoyé par TMDB dans le format commun.
 * Tâche R2 · Arthur
 * @returns {MovieCard}
 */
// oxlint-disable-next-line no-unused-vars -- à enlever quand la tâche TODO est faite
export function toMovieCard(movie) {
  // TODO R2 : retourner { id, type: 'movie', title, year, posterPath, rating, voteCount, popularity, genreIds, releaseDate }
  throw new Error('toMovieCard : tâche R2 pas encore faite')
}

/**
 * Recherche des films par texte (/search/movie).
 * Tâche R2 · Arthur
 * @returns {Promise<{ results: MovieCard[], totalResults: number, totalPages: number }>}
 */
// oxlint-disable-next-line no-unused-vars -- à enlever quand la tâche TODO est faite
export async function searchMovies(query, page = 1) {
  // TODO R2 : await tmdb.get('/search/movie', { params: { query, page } }) puis toMovieCard sur chaque résultat
  throw new Error('searchMovies : tâche R2 pas encore faite')
}

/**
 * Liste de films sans texte, filtrée et triée par TMDB (/discover/movie).
 * Tâches FI4 et T1 · Ruben
 */
// oxlint-disable-next-line no-unused-vars -- à enlever quand la tâche TODO est faite
export async function discoverMovies({ genre, year, sort, page = 1 } = {}) {
  // TODO FI4 : await tmdb.get('/discover/movie', { params: { with_genres: genre, primary_release_year: year, sort_by: sort, page } })
  throw new Error('discoverMovies : tâche FI4 pas encore faite')
}
