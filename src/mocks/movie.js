/**
 * FAUSSE FICHE de film (format MovieDetail, voir src/api/movies.js).
 * Sert à développer les composants de la fiche tant que getMovie (M1) n'est pas fait.
 */
import { mockMovies } from './movies'

export const mockMovie = {
  id: 438631,
  title: 'Dune',
  year: '2021',
  runtime: 155,
  genres: ['Science-Fiction', 'Aventure'],
  overview:
    "Paul Atréides, héritier d'une grande famille, part avec les siens sur Arrakis, planète désertique et dangereuse.",
  rating: 7.8,
  voteCount: 12000,
  posterPath: null,
  backdropPath: null,
  releaseDate: '2021-09-15',
  cast: [
    { id: 1, name: 'Timothée Chalamet', character: 'Paul Atréides', profilePath: null },
    { id: 2, name: 'Rebecca Ferguson', character: 'Dame Jessica', profilePath: null },
    { id: 3, name: 'Oscar Isaac', character: 'Duc Leto Atréides', profilePath: null },
    { id: 4, name: 'Zendaya', character: 'Chani', profilePath: null },
  ],
  trailerKey: null,
  recommendations: mockMovies.slice(1),
}
