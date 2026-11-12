# ChillFlix
ChillFlix — bibliothèque de films et séries connectée à l’API TMDB : recherche, filtres, tri et fiches détaillées.

# Wireframe 
Figma : [ChillFlix WireFrame](https://www.figma.com/design/djbbP39HLNPu8NNK6hKHQq/ChillFlix-%E2%80%94-Wireframes?node-id=0-1&t=yZKhft32W2b3hpeX-1)

# Démarrer

```shell
npm install
cp .env.example .env.local   # puis coller le jeton TMDB dans .env.local (jamais commité)
npm run dev
```

Jeton TMDB : themoviedb.org > Paramètres > API > « Jeton d'accès en lecture à l'API ».

# Architecture

Chaque composant est un fichier séparé, avec en haut son code de tâche iceScrum, son responsable et ses props.
Les composants pas encore faits affichent leur nom dans un cadre pointillé (classe `stub`) : on remplit le sien sans toucher aux autres.

```text
src/
  api/          appels à TMDB (tmdb.js = client axios ; search.js, movies.js, genres.js)
  stores/       état partagé Pinia (search.js = recherche, filtres, tri, page ; genres.js)
  router/       adresses : /recherche, /film/:id, 404
  views/        pages = assemblage de composants (SearchView, MovieView, NotFoundView)
  components/
    layout/     AppHeader, AppFooter, SearchBar
    ui/         briques réutilisables : MediaCard, CardSkeleton, BaseSelect, FilterChip,
                BasePagination, BaseTabs, BaseCarousel, EmptyState, ErrorState
    search/     ResultsHeader, SearchFilters, ActiveFilters, ResultsGrid
    detail/     DetailBreadcrumb, DetailHero, OverviewSection, TrailerPlayer,
                CastCarousel, RecommendationsCarousel
  assets/       tokens.css (couleurs, espacements de la maquette), base.css (styles globaux)
  utils/        image.js (adresse des images TMDB), sortMovies.js
  mocks/        fausses données pour coder l'interface sans l'API
```

- **Format commun d'un film** (cartes, grille, carrousels) : voir `src/api/search.js`. Format de la fiche : `src/api/movies.js`.
- **L'URL est la source de vérité** de la recherche : `/recherche?q=dune&genre=878&annee=2021&tri=rating&page=2`.
- **Couleurs** : toujours `var(--cf-…)` de `tokens.css`, jamais de valeur en dur.

# chillflix

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```