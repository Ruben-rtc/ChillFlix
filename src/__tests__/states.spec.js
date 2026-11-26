/**
 * Tests de ErrorState et EmptyState (tâche R9 · Arthur) : textes et événements des boutons.
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorState from '@/components/ui/ErrorState.vue'
import EmptyState from '@/components/ui/EmptyState.vue'

describe('ErrorState', () => {
  it('affiche le message technique quand il y en a un', () => {
    const wrapper = mount(ErrorState, { props: { message: 'Network Error' } })
    expect(wrapper.find('.error-state-detail').text()).toBe('Network Error')
  })

  it("n'affiche pas de détail quand il n'y a pas de message", () => {
    const wrapper = mount(ErrorState)
    expect(wrapper.find('.error-state-detail').exists()).toBe(false)
  })

  it('est annoncé aux lecteurs d’écran (role="alert")', () => {
    expect(mount(ErrorState).find('[role="alert"]').exists()).toBe(true)
  })

  it('émet retry au clic sur « Réessayer »', async () => {
    const wrapper = mount(ErrorState)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('retry')).toHaveLength(1)
  })
})

describe('EmptyState', () => {
  it('affiche « Aucun résultat »', () => {
    expect(mount(EmptyState).find('h2').text()).toBe('Aucun résultat')
  })

  it('émet reset au clic sur « Réinitialiser les filtres »', async () => {
    const wrapper = mount(EmptyState)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('reset')).toHaveLength(1)
  })
})
