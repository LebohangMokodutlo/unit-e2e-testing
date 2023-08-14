import { mount } from '@vue/test-utils'
import MyAxios from '@/components/MyAxios.vue'

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [{ name: 'Leanne Graham', email: 'Sincere@april.biz' }] }))
}))

describe('MyAxios', () => {
  it('It fetches data with Axios', async () => {
    const wrapper = mount(MyAxios)

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('Leanne Graham')
    expect(wrapper.html()).toContain('Sincere@april.biz')
  })
})
