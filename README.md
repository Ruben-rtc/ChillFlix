# ChillFlix

ChillFlix est une application web pour trouver un film et tout savoir sur lui. Elle utilise l'API de [TMDB](https://www.themoviedb.org/) : on cherche un film par son titre, on affine avec des filtres et un tri, puis on ouvre sa fiche (synopsis, bande-annonce, distribution, recommandations). Projet frontend Vue 3 réalisé au CPNV.

<!-- TODO Z2 : ajouter une capture d'écran quand l'application est finie, par ex. :
![Page de résultats de ChillFlix](doc/capture-resultats.png) -->

## Fonctionnalités

<!-- TODO Z2 : vérifier cette liste à la fin du sprint 2 -->

- **Recherche** de films par titre, avec pagination des résultats.
- **Filtres** par genre et par année.
- **Tri** par pertinence, note, date de sortie ou titre.
- **Fiche d'un film** : affiche, synopsis, durée, genres, note, bande-annonce, distribution et films recommandés.
- **Adresse partageable** : la recherche, les filtres, le tri et la page sont dans l'URL.
- Messages clairs quand il n'y a **aucun résultat** ou quand **TMDB ne répond pas**.
- Affichage adapté à l'ordinateur, à la tablette et au mobile.

# Installation

## Prérequis

- [Node.js](https://nodejs.org/) 22.18 ou plus récent (voir `engines` dans `package.json`), avec npm.
- Un compte gratuit sur [themoviedb.org](https://www.themoviedb.org/signup) pour obtenir un jeton d'API.

## 1. Installer les dépendances

```shell
npm install
```

## 2. Créer le fichier `.env.local` avec le jeton TMDB

Copier le modèle :

```shell
cp .env.example .env.local      # macOS, Linux, PowerShell
copy .env.example .env.local    # invite de commandes Windows (cmd)
```

Puis récupérer le jeton : themoviedb.org > Paramètres > API > « Jeton d'accès en lecture à l'API » (une longue chaîne qui commence par `eyJ`), et le coller dans `.env.local` :

```shell
VITE_TMDB_TOKEN=eyJ...
```

`.env.local` n'est **jamais commité** (il est dans `.gitignore`) : chacun utilise son propre jeton.

## 3. Lancer l'application

```shell
npm run dev
```

Puis ouvrir l'adresse affichée dans le terminal (en général <http://localhost:5173>).

Si les films ne s'affichent pas et que la console du navigateur montre une erreur 401, le jeton est absent ou incorrect dans `.env.local`. Relancer `npm run dev` après l'avoir corrigé.

## Commandes utiles

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Lance le site en développement, avec rechargement automatique |
| `npm run build` | Construit la version de production dans `dist/` |
| `npm run preview` | Affiche localement la version construite par `build` |
| `npm run test:unit` | Lance les tests Vitest (`src/__tests__/`) en mode surveillance |
| `npx vitest run` | Lance les tests une seule fois |
| `npm run lint` | Vérifie et corrige le code (oxlint puis ESLint) |
| `npm run format` | Formate le code de `src/` avec Prettier |

## Outils conseillés

- [VS Code](https://code.visualstudio.com/) avec l'extension [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar).
- L'extension navigateur [Vue.js devtools](https://devtools.vuejs.org/) pour voir les composants et le store Pinia.

# Équipe

<!-- TODO Z2 : compléter avec les noms de famille si on veut -->

| Membre | Rôle principal |
| --- | --- |
| Ruben | Logique de recherche : API, stores, URL, filtres et tri |
| Arthur | Fiches de film, requêtes TMDB, README et tests |
| Sellé | Maquette et composants visuels réutilisables |

# Wireframe 
Figma : [ChillFlix WireFrame](https://www.figma.com/design/djbbP39HLNPu8NNK6hKHQq/ChillFlix-%E2%80%94-Wireframes?node-id=0-1&t=yZKhft32W2b3hpeX-1)

# Règles de l'équipe

- **Une branche par tâche**, nommée `feature/<code>-<sujet>` (ex. `feature/r6-media-card`).
- **Toujours partir de `develop`**, jamais de `main` : `git checkout develop && git pull && git checkout -b feature/<code>-<sujet>`.
- **Pull request vers `develop`**, relue par quelqu'un d'autre avant le merge.
- **Jamais de push direct sur `main`.**
- Style (couleurs, polices, espacements, états) : voir [`design.md`](design.md). Toujours `var(--cf-…)`, jamais de valeur en dur.

## Format commun d'un film

Utilisé par les cartes, la grille et les carrousels (les composants ne voient jamais le format brut de TMDB) :

```js
{ id, type: 'movie', title, year, posterPath, rating, voteCount, popularity, genreIds, releaseDate }
```

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
