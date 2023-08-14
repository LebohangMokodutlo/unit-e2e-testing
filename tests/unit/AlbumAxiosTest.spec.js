import { mount } from '@vue/test-utils'
import AlbumAxios from '@/components/AlbumAxios'

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [{ title: 'quidem molestiae enim' }] }))
}))

describe('AlbumAxios', () => {
  it('Fetch Album titles', async () => {
    const wrapper = mount(AlbumAxios)
    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('quidem molestiae enim')
  })
})
