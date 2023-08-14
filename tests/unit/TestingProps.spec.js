import { mount } from '@vue/test-utils'
import VueProps from '@/components/VueProps.vue'

describe('VueProps', () => {
  it('it renders Message prop correctly', () => {
    const message = 'HelloWorldWide'
    const wrapper = mount(VueProps, {
      propsData: {
        message
      }
    })
    const receivedMessage = wrapper.vm.message

    expect(receivedMessage).toBe(message)
  }),

  // it('must throw an error if message props is not rendered', ()=>{
  //     const mountedComponentWithoutMessageProp=()=>mount(VueProps)

  //     expect(mountedComponentWithoutMessageProp).toThrowError();
  // })
  it('It reenders the prop "Count" correctly', () => {
    const count = 0
    const wrapper = mount(VueProps, {
      propsData: {
        count
      }
    })
    const receivedCount = wrapper.vm.count

    expect(receivedCount).toBe(count)
  })
})
