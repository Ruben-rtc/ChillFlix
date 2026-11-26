/**
 * Tests de MediaCard (tâche R6) : lien vers la fiche, affiche, année et note.
 * RouterLink est remplacé par RouterLinkStub : pas besoin d'un vrai routeur.
 */
import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import MediaCard from '@/components/ui/MediaCard.vue'
import noPoster from '@/assets/no-poster.svg'

const dune = {
  id: 438631,
  type: 'movie',
  title: 'Dune',
  year: '2021',
  posterPath: '/abc.jpg',
  rating: 7.8,
  voteCount: 12000,
  popularity: 99.5,
  genreIds: [878, 12],
  releaseDate: '2021-09-15',
}

function mountCard(item) {
  return mount(MediaCard, {
    props: { item },
    global: { stubs: { RouterLink: RouterLinkStub } },
  })
}

describe('MediaCard', () => {
  it('mène vers la fiche du film', () => {
    const wrapper = mountCard(dune)
    expect(wrapper.findComponent(RouterLinkStub).props('to')).toBe('/film/438631')
  })

  it("affiche l'affiche TMDB avec le titre comme texte alternatif", () => {
    const img = mountCard(dune).find('img')
    expect(img.attributes('src')).toBe('https://image.tmdb.org/t/p/w342/abc.jpg')
    expect(img.attributes('alt')).toBe('Dune')
  })

  it("utilise l'image par défaut quand il n'y a pas d'affiche", () => {
    const img = mountCard({ ...dune, posterPath: null }).find('img')
    expect(img.attributes('src')).toBe(noPoster)
  })

  it("affiche le titre, l'année et la note avec une décimale", () => {
    const wrapper = mountCard({ ...dune, rating: 8 })
    expect(wrapper.find('.title').text()).toBe('Dune')
    expect(wrapper.find('.meta').text()).toContain('2021')
    expect(wrapper.find('.meta').text()).toContain('8.0')
  })

  it("n'affiche pas l'année quand elle est inconnue", () => {
    const wrapper = mountCard({ ...dune, year: '' })
    expect(wrapper.find('.meta').text()).not.toContain('·')
    expect(wrapper.find('.meta').text()).toContain('7.8')
  })
})
