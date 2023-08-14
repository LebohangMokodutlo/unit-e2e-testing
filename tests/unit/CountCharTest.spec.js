import { mount } from '@vue/test-utils'
import CountChar from '@/components/CountChar.vue'

describe('CountChar', () => {
  it('It counts characters and returns a value', () => {
    const wrapper = mount(CountChar)
    // wrapper.vm.count() to access the method

    expect(wrapper.vm.count()).toBe(11)
  })
  // Use async so that we can use wait for a data property to be updated(next tick)
  it('change a data property', async () => {
    const wrapper = mount(CountChar)

    wrapper.setData({ phrase: 'the phrase' })
    // using wait to wait for next tick
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(CountChar).text()).toContain('the phrase')
  })
})
