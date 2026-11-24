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
import { tmdb } from './tmdb'

/** TMDB refuse les pages au-delà de 500, même si total_pages est plus grand. */
const MAX_PAGES = 500

/**
 * Transforme un film renvoyé par TMDB dans le format commun.
 * Tâche R2 · Arthur
 * @returns {MovieCard}
 */
export function toMovieCard(movie) {
  const releaseDate = movie.release_date ?? ''

  return {
    id: movie.id,
    type: 'movie',
    title: movie.title,
    year: releaseDate.slice(0, 4),
    posterPath: movie.poster_path ?? null,
    rating: movie.vote_average ?? 0,
    voteCount: movie.vote_count ?? 0,
    popularity: movie.popularity ?? 0,
    genreIds: movie.genre_ids ?? [],
    releaseDate,
  }
}

/**
 * Recherche des films par texte (/search/movie).
 * Tâche R2 · Arthur
 * @param {string} query  texte recherché
 * @param {number} [page=1]
 * @returns {Promise<{ results: MovieCard[], totalResults: number, totalPages: number }>}
 */
export async function searchMovies(query, page = 1) {
  const text = (query ?? '').trim()

  // Pas de texte : inutile d'appeler TMDB.
  if (!text) {
    return { results: [], totalResults: 0, totalPages: 0 }
  }

  const { data } = await tmdb.get('/search/movie', {
    params: { query: text, page },
  })

  return {
    results: data.results.map(toMovieCard),
    totalResults: data.total_results,
    totalPages: Math.min(data.total_pages, MAX_PAGES),
  }
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
