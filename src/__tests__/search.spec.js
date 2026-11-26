/**
 * Tests de src/api/search.js (tâche R2) : format commun d'un film et recherche par texte.
 * L'API TMDB est remplacée par un faux client : les tests ne font aucun appel réseau.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { toMovieCard, searchMovies } from '@/api/search'
import { tmdb } from '@/api/tmdb'

vi.mock('@/api/tmdb', () => ({
  tmdb: { get: vi.fn() },
}))

/** Un film tel que TMDB le renvoie dans /search/movie */
const dune = {
  id: 438631,
  title: 'Dune',
  original_title: 'Dune',
  overview: 'Paul Atreides…',
  release_date: '2021-09-15',
  poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
  backdrop_path: '/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg',
  vote_average: 7.8,
  vote_count: 12000,
  popularity: 99.5,
  genre_ids: [878, 12],
  adult: false,
}

describe('toMovieCard', () => {
  it('transforme un film TMDB dans le format commun', () => {
    expect(toMovieCard(dune)).toEqual({
      id: 438631,
      type: 'movie',
      title: 'Dune',
      year: '2021',
      posterPath: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      rating: 7.8,
      voteCount: 12000,
      popularity: 99.5,
      genreIds: [878, 12],
      releaseDate: '2021-09-15',
    })
  })

  it('ne garde pas les champs inutiles de TMDB', () => {
    const card = toMovieCard(dune)
    expect(card).not.toHaveProperty('overview')
    expect(card).not.toHaveProperty('backdrop_path')
    expect(card).not.toHaveProperty('release_date')
  })

  it('met une année vide quand la date de sortie est vide', () => {
    const card = toMovieCard({ ...dune, release_date: '' })
    expect(card.year).toBe('')
    expect(card.releaseDate).toBe('')
  })

  it('met des valeurs par défaut quand des champs manquent', () => {
    expect(toMovieCard({ id: 1, title: 'Film sans infos' })).toEqual({
      id: 1,
      type: 'movie',
      title: 'Film sans infos',
      year: '',
      posterPath: null,
      rating: 0,
      voteCount: 0,
      popularity: 0,
      genreIds: [],
      releaseDate: '',
    })
  })
})

describe('searchMovies', () => {
  beforeEach(() => {
    tmdb.get.mockReset()
  })

  it('appelle /search/movie et renvoie des films au format commun', async () => {
    tmdb.get.mockResolvedValue({
      data: { results: [dune], total_results: 1, total_pages: 1 },
    })

    const response = await searchMovies('dune', 2)

    expect(tmdb.get).toHaveBeenCalledWith('/search/movie', { params: { query: 'dune', page: 2 } })
    expect(response.results).toEqual([toMovieCard(dune)])
    expect(response.totalResults).toBe(1)
    expect(response.totalPages).toBe(1)
  })

  it('enlève les espaces autour du texte', async () => {
    tmdb.get.mockResolvedValue({ data: { results: [], total_results: 0, total_pages: 0 } })

    await searchMovies('  dune  ')

    expect(tmdb.get).toHaveBeenCalledWith('/search/movie', { params: { query: 'dune', page: 1 } })
  })

  it("n'appelle pas TMDB quand la recherche est vide", async () => {
    const response = await searchMovies('   ')

    expect(tmdb.get).not.toHaveBeenCalled()
    expect(response).toEqual({ results: [], totalResults: 0, totalPages: 0 })
  })

  it('limite le nombre de pages à 500 (limite de TMDB)', async () => {
    tmdb.get.mockResolvedValue({
      data: { results: [dune], total_results: 12000, total_pages: 600 },
    })

    const response = await searchMovies('a')

    expect(response.totalPages).toBe(500)
  })
})
