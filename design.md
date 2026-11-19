# ChillFlix — design.md

Référence unique du style du site (charte de `Design/ChillFlix — Maquette.pdf`). À suivre pour tout nouveau composant, par un humain comme par une IA. Les valeurs vivent dans [`src/assets/tokens.css`](src/assets/tokens.css) : on écrit `var(--cf-red)`, **jamais** `#D31324` en dur.

Thème sombre unique, pas d'ombres : la hiérarchie passe par les surfaces et les bordures.

## 1. Couleurs

| Variable | Valeur | Usage |
| --- | --- | --- |
| `--cf-red` | `#D31324` | Action principale, onglet actif, logo, page courante. Texte blanc dessus (5,4:1) |
| `--cf-red-hover` | `#E21B2E` | Survol du bouton principal |
| `--cf-red-press` | `#9D1623` | Bouton pressé, dégradé du bouton principal |
| `--cf-red-text` | `#FF5A68` | Liens et texte rouge sur fond sombre (« Tout effacer ») |
| `--cf-star` | `#F8B42C` | Étoile et barres de la note TMDB **uniquement** |
| `--cf-bg` | `#0B0E13` | Fond de page |
| `--cf-header` | `#0D1015` | Header et footer |
| `--cf-surface` | `#111419` | Champs, panneaux, cartes d'avis |
| `--cf-surface-2` | `#171A20` | Chips, champ de recherche, survol |
| `--cf-border` | `#262A32` | Séparateurs et contours de cartes |
| `--cf-border-2` | `#353A44` | Contours des champs et boutons secondaires |
| `--cf-text` | `#F4F5F7` | Titres, valeurs, libellés (17,7:1) |
| `--cf-text-2` | `#B4B9C3` | Synopsis, métadonnées (9,8:1) |
| `--cf-muted` | `#8B919C` | Légendes, placeholders (6,1:1) |
| `--cf-error` | `#FF6B70` | Messages d'erreur, champs invalides (7,0:1) |

**Règle : le rouge ne sert qu'à l'action principale et à l'état actif. Un seul bouton rouge par zone.**

## 2. Polices et tailles

Deux familles seulement, via Google Fonts, repli `system-ui, sans-serif` :

- **Space Grotesk** (600, 700) pour les titres : `--font-title`
- **Inter** (400, 500, 600) pour tout le reste : `--font-text`

| Rôle | Police | Graisse | Taille / interligne | Remarque |
| --- | --- | --- | --- | --- |
| Titre de page (H1) | Space Grotesk | 700 | 32 / 40 px | interlettrage −1 % |
| Titre de section (H2) | Space Grotesk | 700 | 24 / 32 px | |
| Sous-titre (H3) | Space Grotesk | 600 | 18 / 26 px | |
| Texte courant | Inter | 400 | 16 / 24 px | |
| Texte secondaire | Inter | 400 / 500 | 14 / 20 px | métadonnées |
| Légende | Inter | 400 | 13 / 18 px | jamais sous 13 px |
| Surtitre | Inter | 600 | 11 / 16 px | capitales, +6 % d'espacement |

## 3. Espacements, rayons, mise en page

Échelle de base 4 px :

| Variable | Valeur |
| --- | --- |
| `--space-1` | 4 px |
| `--space-2` | 8 px |
| `--space-3` | 12 px |
| `--space-4` | 16 px |
| `--space-6` | 24 px |
| `--space-8` | 32 px |
| `--space-12` | 48 px |
| `--space-16` | 64 px |

Rayons :

| Variable | Valeur | Usage |
| --- | --- | --- |
| `--radius-tag` | 6 px | tags |
| `--radius` | 10 px | champs, boutons, cartes (rayon unique des contrôles) |
| `--radius-panel` | 16 px | panneaux |
| `--radius-pill` | 999 px | chips |

Mise en page (variables `--page-margin`, `--gutter`, classe `.container`) :

| Écran | Marges latérales | Gouttière |
| --- | --- | --- |
| Ordinateur (≥ 1024 px) | 48 px | 24 px |
| Tablette (600 – 1023 px) | 32 px | 20 px |
| Mobile (< 600 px) | 16 px | 16 px |

Contenu utile : 1 344 px de large au maximum. Header : 72 px de haut, collé en haut. Zones cliquables : 44 px minimum.

## 4. Composants

- **Boutons** : 3 niveaux. Principal (rouge), secondaire (contour `--cf-border-2`), tertiaire (icône seule avec `aria-label`).
- **Champs** : 52 px de haut, libellé en surtitre 11 px, valeur 14 px ; bordure claire quand un filtre est appliqué.
- **Chips** : 36 px de haut, pilule, croix de 14 px (zone tactile étendue à 44 px).
- **Carte de film** : affiche 2:3 avec 10 px de rayon, titre sur 1 ligne tronquée, année et note dessous.

## 5. États

Chaque élément interactif documente : défaut, survol, pressé, focus, désactivé, et squelette de chargement pour les cartes.

- **Survol** : bouton principal `--cf-red-hover` ; autres éléments fond `--cf-surface-2`.
- **Pressé** : bouton principal `--cf-red-press`.
- **Focus clavier** : anneau blanc 2 px, décalé de 3 px (`outline: 2px solid #fff; outline-offset: 3px`), sur tous les éléments interactifs, **jamais supprimé**.
- **Désactivé** : couleurs atténuées (`--cf-muted`), pas de survol.
- **Erreur** : `--cf-error`.
