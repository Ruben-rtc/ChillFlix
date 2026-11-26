/**
 * Tests de SearchBar (tâche R4) : envoi vers /recherche, champ vide, croix, préremplissage.
 * $route et $router sont des faux objets : pas besoin d'un vrai routeur.
 */
import { describe, it, expect, vi } from 'vitest'
import { reactive } from 'vue'
import { mount } from '@vue/test-utils'
import SearchBar from '@/components/layout/SearchBar.vue'

function mountSearchBar(query = {}) {
  const $route = reactive({ query })
  const $router = { push: vi.fn() }
  const wrapper = mount(SearchBar, { global: { mocks: { $route, $router } } })
  return { wrapper, $route, $router }
}

describe('SearchBar', () => {
  it('va vers /recherche?q=… quand on valide', async () => {
    const { wrapper, $router } = mountSearchBar()
    await wrapper.find('input').setValue('dune')
    await wrapper.find('form').trigger('submit')
    expect($router.push).toHaveBeenCalledWith({ path: '/recherche', query: { q: 'dune' } })
  })

  it('enlève les espaces autour du texte', async () => {
    const { wrapper, $router } = mountSearchBar()
    await wrapper.find('input').setValue('  dune  ')
    await wrapper.find('form').trigger('submit')
    expect($router.push).toHaveBeenCalledWith({ path: '/recherche', query: { q: 'dune' } })
  })

  it('ne fait rien quand le champ est vide ou ne contient que des espaces', async () => {
    const { wrapper, $router } = mountSearchBar()
    await wrapper.find('form').trigger('submit')
    await wrapper.find('input').setValue('   ')
    await wrapper.find('form').trigger('submit')
    expect($router.push).not.toHaveBeenCalled()
  })

  it("préremplit le champ avec le q de l'adresse", () => {
    const { wrapper } = mountSearchBar({ q: 'alien' })
    expect(wrapper.find('input').element.value).toBe('alien')
  })

  it("met à jour le champ quand le q de l'adresse change", async () => {
    const { wrapper, $route } = mountSearchBar({ q: 'alien' })
    $route.query = { q: 'zodiac' }
    await wrapper.vm.$nextTick()
    expect(wrapper.find('input').element.value).toBe('zodiac')
  })

  it("n'affiche la croix que s'il y a du texte, et la croix vide le champ", async () => {
    const { wrapper } = mountSearchBar()
    expect(wrapper.find('.searchbar__clear').exists()).toBe(false)

    await wrapper.find('input').setValue('dune')
    await wrapper.find('.searchbar__clear').trigger('click')

    expect(wrapper.find('input').element.value).toBe('')
    expect(wrapper.find('.searchbar__clear').exists()).toBe(false)
  })
})
