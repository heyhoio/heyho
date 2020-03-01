import { mount } from '@vue/test-utils'
import About from '@/pages/about.vue'

describe('Color Picker', () => {
  const wrapper = mount(About)

  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
