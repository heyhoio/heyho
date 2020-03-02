import { mount } from '@vue/test-utils'
import BoxShadowGenerator from '@/pages/box-shadow-generator'

describe('Box Shadow Generator', () => {
  const wrapper = mount(BoxShadowGenerator)
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should change box shadow based on its data', () => {
    const [
      horizontal,
      vertical,
      blur,
      spread,
      shadowColor,
      inset
    ] = wrapper.vm.boxShadowProps
    horizontal.model = '50'
    vertical.model = '20'
    blur.model = '30'
    spread.model = '10'
    shadowColor.model = '#fff'
    inset.model = true

    const expected = `${horizontal.model}px ${vertical.model}px ${
      blur.model
    }px ${spread.model}px ${shadowColor.color} ${inset.model ? 'inset' : ''}`

    expect(wrapper.vm.boxShadow).toEqual(expected)
  })
})
