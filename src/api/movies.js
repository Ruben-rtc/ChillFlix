/**
 * Détail d'un film.
 *
 * FORMAT de la fiche (utilisé par MovieView et les composants de src/components/detail) :
 * @typedef {Object} MovieDetail
 * @property {number} id
 * @property {string} title
 * @property {string} year
 * @property {number|null} runtime        en minutes
 * @property {string[]} genres            ex. ['Science-Fiction', 'Aventure']
 * @property {string} overview            synopsis
 * @property {number} rating
 * @property {number} voteCount
 * @property {string|null} posterPath
 * @property {string|null} backdropPath
 * @property {string} releaseDate
 * @property {{ id: number, name: string, character: string, profilePath: string|null }[]} cast
 * @property {string|null} trailerKey     clé YouTube de la bande-annonce
 * @property {import('./search').MovieCard[]} recommendations
 */
// oxlint-disable-next-line no-unused-vars -- à enlever quand la tâche TODO est faite
import { tmdb } from './tmdb'

/**
 * Tâche M1 · Arthur
 * Appel : /movie/{id}?append_to_response=credits,videos,recommendations
 * @returns {Promise<MovieDetail>}
 */
// oxlint-disable-next-line no-unused-vars -- à enlever quand la tâche TODO est faite
export async function getMovie(id) {
  // TODO M1 : appeler tmdb, puis transformer la réponse au format MovieDetail
  throw new Error('getMovie : tâche M1 pas encore faite')
}
