/**
 * Tests de BasePagination (tâche R8 · Arthur) : numéros affichés, « … », boutons et événement change.
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BasePagination from '@/components/ui/BasePagination.vue'

/** Monte la pagination et renvoie le texte de chaque élément entre Précédent et Suivant. */
function itemsText(page, totalPages) {
  const wrapper = mount(BasePagination, { props: { page, totalPages } })
  const texts = wrapper.findAll('li').map((li) => li.text())
  return texts.slice(1, -1) // enlève « Précédent » et « Suivant »
}

describe('BasePagination', () => {
  it("n'affiche rien quand il n'y a qu'une page", () => {
    const wrapper = mount(BasePagination, { props: { page: 1, totalPages: 1 } })
    expect(wrapper.find('nav').exists()).toBe(false)
  })

  it("n'affiche rien quand il n'y a aucune page", () => {
    const wrapper = mount(BasePagination, { props: { page: 1, totalPages: 0 } })
    expect(wrapper.find('nav').exists()).toBe(false)
  })

  it('affiche toutes les pages quand il y en a peu', () => {
    expect(itemsText(1, 3)).toEqual(['1', '2', '3'])
  })

  it('remplace plusieurs pages manquantes par « … »', () => {
    expect(itemsText(5, 20)).toEqual(['1', '…', '4', '5', '6', '…', '20'])
  })

  it('affiche la page manquante plutôt que « … » quand il n’en manque qu’une', () => {
    // page 3 sur 5 : 1, 2, 3, 4, 5 (pas de « … » entre 1 et 2, ni entre 4 et 5)
    expect(itemsText(3, 5)).toEqual(['1', '2', '3', '4', '5'])
  })

  it('gère le début et la fin de la liste', () => {
    expect(itemsText(1, 20)).toEqual(['1', '2', '…', '20'])
    expect(itemsText(20, 20)).toEqual(['1', '…', '19', '20'])
  })

  it('désactive « Précédent » sur la première page et « Suivant » sur la dernière', () => {
    const first = mount(BasePagination, { props: { page: 1, totalPages: 5 } })
    const buttons = first.findAll('button')
    expect(buttons[0].attributes('disabled')).toBeDefined()
    expect(buttons.at(-1).attributes('disabled')).toBeUndefined()

    const last = mount(BasePagination, { props: { page: 5, totalPages: 5 } })
    const lastButtons = last.findAll('button')
    expect(lastButtons[0].attributes('disabled')).toBeUndefined()
    expect(lastButtons.at(-1).attributes('disabled')).toBeDefined()
  })

  it('marque la page actuelle avec aria-current="page"', () => {
    const wrapper = mount(BasePagination, { props: { page: 2, totalPages: 5 } })
    const current = wrapper.findAll('[aria-current="page"]')
    expect(current).toHaveLength(1)
    expect(current[0].text()).toBe('2')
  })

  it('émet change avec le bon numéro', async () => {
    const wrapper = mount(BasePagination, { props: { page: 2, totalPages: 5 } })

    await wrapper.find('[aria-label="Page 4"]').trigger('click')
    await wrapper.findAll('button')[0].trigger('click') // Précédent
    await wrapper.findAll('button').at(-1).trigger('click') // Suivant

    expect(wrapper.emitted('change')).toEqual([[4], [1], [3]])
  })

  it("n'émet rien quand on clique sur la page actuelle", async () => {
    const wrapper = mount(BasePagination, { props: { page: 2, totalPages: 5 } })
    await wrapper.find('[aria-label="Page 2"]').trigger('click')
    expect(wrapper.emitted('change')).toBeUndefined()
  })
})
