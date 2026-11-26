/**
 * Tests de ResultsHeader (tâche R5 · Arthur) : titre avec le texte recherché et nombre de films.
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { useSearchStore } from '@/stores/search'
import ResultsHeader from '@/components/search/ResultsHeader.vue'

let pinia

function mountHeader(query, totalResults) {
  const store = useSearchStore()
  store.query = query
  store.totalResults = totalResults
  return mount(ResultsHeader, { global: { plugins: [pinia] } })
}

describe('ResultsHeader', () => {
  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('affiche le texte recherché dans le titre', () => {
    expect(mountHeader('dune', 3).find('h1').text()).toBe('Résultats pour « dune »')
  })

  it('met « film » au singulier pour 0 et 1', () => {
    expect(mountHeader('dune', 0).find('.results-count').text()).toBe('0 film')
    expect(mountHeader('dune', 1).find('.results-count').text()).toBe('1 film')
  })

  it('met « films » au pluriel à partir de 2', () => {
    expect(mountHeader('dune', 42).find('.results-count').text()).toBe('42 films')
  })

  // Le signe exact (' ou ’) dépend du navigateur / de Node : on vérifie seulement qu'il y en a un
  it('sépare les milliers (12’345 films)', () => {
    expect(mountHeader('a', 12345).find('.results-count').text()).toMatch(/^12\D345 films$/)
  })
})
