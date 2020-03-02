import { mount } from '@vue/test-utils'
import CSSFilters from '@/pages/css-filters.vue'

describe('Color Picker', () => {
  const wrapper = mount(CSSFilters)

  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
