import { mount } from '@vue/test-utils'
import MethodComponent from '@/components/MethodComponent.vue'

describe('Componet Method.vue', () => {
  it('capiltalizeMessage method capitalizes message', () => {
    const wrapper = mount(MethodComponent)
    const expectedcapitalizeMessage = wrapper.vm.message.toUpperCase()

    expect(wrapper.vm.capitalizeMessage()).toBe(expectedcapitalizeMessage)
  }),

  it('Set message to a new value', () => {
    const message = 'Hello, Universe'
    const wrapper = mount(MethodComponent)
    wrapper.setData({ message: 'Hello, Universe' })

    expect(wrapper.vm.message).toBe(message)
  })
})
