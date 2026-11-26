/**
 * Tests de src/utils/sortMovies.js (tâche T2 · Ruben).
 * Seul le cas « pas de tri » est testé tant que T2 n'est pas faite.
 */
import { describe, it, expect } from 'vitest'
import { sortMovies } from '@/utils/sortMovies'

const movies = [
  { id: 1, title: 'Zodiac', rating: 7.7, voteCount: 6000, releaseDate: '2007-03-02' },
  { id: 2, title: 'Alien', rating: 8.2, voteCount: 15000, releaseDate: '1979-05-25' },
  { id: 3, title: 'Élysium', rating: 6.5, voteCount: 9000, releaseDate: '2013-08-07' },
]

describe('sortMovies', () => {
  it("garde l'ordre reçu quand aucun tri n'est choisi (pertinence)", () => {
    const ids = sortMovies(movies, null).map((movie) => movie.id)
    expect(ids).toEqual([1, 2, 3])
  })

  // TODO Z2 : tests à écrire quand T2 est faite (voir le commentaire de sortMovies.js) :
  // - tri par note, en ignorant les films avec moins de 100 votes
  // - tri par date, en ignorant les films pas encore sortis
  // - tri par titre en ordre alphabétique français (« Élysium » avant « Zodiac »)
  // - le tableau reçu n'est pas modifié
})
