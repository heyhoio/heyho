import { mount } from '@vue/test-utils'
import ColorPicker from '@/pages/color-picker.vue'

describe('Color Picker', () => {
  const wrapper = mount(ColorPicker)

  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
