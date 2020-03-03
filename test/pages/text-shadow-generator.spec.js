import { mount } from '@vue/test-utils'
import TextShadowGenerator from '@/pages/text-shadow-generator'

describe('Base 64 converter', () => {
  const wrapper = mount(TextShadowGenerator)
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should change box shadow based on its data', () => {
    const [right, down, blur, shadowColor] = wrapper.vm.textShadowProps
    right.model = 21
    down.model = 212
    blur.model = 211
    shadowColor.model = 321

    expect(wrapper.vm.textShadow).toEqual(
      `${right.model}px ${down.model}px ${blur.model}px ${shadowColor.color}`
    )
  })
})
