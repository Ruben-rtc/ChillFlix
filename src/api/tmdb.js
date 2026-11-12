/**
 * Client HTTP de l'API TMDB : tous les appels passent par ici.
 * Le jeton est lu dans .env.local (VITE_TMDB_TOKEN), voir .env.example.
 * Doc : https://developer.themoviedb.org/reference/intro/getting-started
 */
import axios from 'axios'

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
  params: { language: 'fr-FR' },
})
