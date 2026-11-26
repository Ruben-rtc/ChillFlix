/**
 * Tests des getters des stores Pinia (genres : nameById ; search : hasFilters).
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useGenresStore } from '@/stores/genres'
import { useSearchStore } from '@/stores/search'

describe('store genres · nameById', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("donne le nom d'un genre à partir de son id", () => {
    const store = useGenresStore()
    store.list = [
      { id: 878, name: 'Science-Fiction' },
      { id: 12, name: 'Aventure' },
    ]
    expect(store.nameById(878)).toBe('Science-Fiction')
  })

  it("accepte un id en texte (comme dans l'URL : ?genre=878)", () => {
    const store = useGenresStore()
    store.list = [{ id: 878, name: 'Science-Fiction' }]
    expect(store.nameById('878')).toBe('Science-Fiction')
  })

  it('renvoie un texte vide pour un genre inconnu', () => {
    const store = useGenresStore()
    store.list = [{ id: 878, name: 'Science-Fiction' }]
    expect(store.nameById(9999)).toBe('')
  })
})

describe('store search · hasFilters', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("est faux quand il n'y a ni genre ni année", () => {
    expect(useSearchStore().hasFilters).toBe(false)
  })

  it('est vrai avec un genre ou une année', () => {
    const store = useSearchStore()
    store.genre = 878
    expect(store.hasFilters).toBe(true)

    store.genre = null
    store.year = 2021
    expect(store.hasFilters).toBe(true)
  })

  it('ne compte pas le texte recherché ni le tri comme des filtres', () => {
    const store = useSearchStore()
    store.query = 'dune'
    store.sort = 'rating'
    expect(store.hasFilters).toBe(false)
  })
})
