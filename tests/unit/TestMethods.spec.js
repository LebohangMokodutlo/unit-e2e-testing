import { mount } from '@vue/test-utils'
import TestDriven from '@/components/TestDriven.vue'

describe('TestDriven', () => {
  it('incrementCount increments count', () => {
    const wrapper = mount(TestDriven)

    wrapper.vm.incrementIt()
    expect(wrapper.vm.count).toEqual(1)
  })
})
