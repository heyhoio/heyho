import { mount } from '@vue/test-utils'
import PalettePicker from '@/pages/palette-picker.vue'

describe('Palette Picker', () => {
  const wrapper = mount(PalettePicker)

  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
