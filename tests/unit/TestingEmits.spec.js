import { mount } from '@vue/test-utils'
import VueProps from '@/components/VueProps'

describe('VueProps', () => {
  it('Emits "increment" event with the correct value', () => {
    const wrapper = mount(VueProps)

    const button = wrapper.find('#increase')
    button.trigger('click')

    expect(wrapper.emitted('increment')).toBeTruthy()
  })
})
