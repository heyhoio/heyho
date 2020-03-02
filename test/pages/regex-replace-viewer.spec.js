import { mount } from '@vue/test-utils'
import RegexReplaceViewer from '@/pages/regex-replace-viewer.vue'

describe('Color Picker', () => {
  const wrapper = mount(RegexReplaceViewer)

  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
