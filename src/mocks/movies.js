/**
 * FAUSSES DONNÉES pour développer l'interface sans attendre l'API.
 * Format commun MovieCard (voir src/api/search.js). Pas d'affiche (posterPath: null)
 * pour tester l'image par défaut ; les notes sont approximatives.
 * Tâche F5 · Ruben : ajouter de vraies réponses TMDB si utile.
 */
export const mockMovies = [
  { id: 438631, type: 'movie', title: 'Dune', year: '2021', posterPath: null, rating: 7.8, voteCount: 12000, popularity: 90, genreIds: [878, 12], releaseDate: '2021-09-15' },
  { id: 157336, type: 'movie', title: 'Interstellar', year: '2014', posterPath: null, rating: 8.4, voteCount: 35000, popularity: 120, genreIds: [12, 18, 878], releaseDate: '2014-11-05' },
  { id: 286217, type: 'movie', title: 'Seul sur Mars', year: '2015', posterPath: null, rating: 7.7, voteCount: 20000, popularity: 60, genreIds: [18, 12, 878], releaseDate: '2015-09-30' },
  { id: 329865, type: 'movie', title: 'Premier Contact', year: '2016', posterPath: null, rating: 7.6, voteCount: 18000, popularity: 45, genreIds: [18, 878, 9648], releaseDate: '2016-11-10' },
  { id: 49047, type: 'movie', title: 'Gravity', year: '2013', posterPath: null, rating: 7.2, voteCount: 15000, popularity: 40, genreIds: [878, 53, 18], releaseDate: '2013-10-02' },
  { id: 17431, type: 'movie', title: 'Moon', year: '2009', posterPath: null, rating: 7.6, voteCount: 5000, popularity: 20, genreIds: [878, 18], releaseDate: '2009-06-12' },
]
