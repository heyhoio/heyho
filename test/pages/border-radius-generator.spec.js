import { mount } from '@vue/test-utils'
import BorderRadiusGenerator from '@/pages/border-radius-generator'

describe('Base 64 converter', () => {
  const wrapper = mount(BorderRadiusGenerator)
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('expects that border-radius reflects to borderProps models', () => {
    const [top, right, bottom, left] = wrapper.vm.borderProps
    top.model = 200
    right.model = 230
    bottom.model = 10
    left.model = 340
    expect(wrapper.vm.borderRadius).toEqual(
      `${top.model}px ${right.model}px ${bottom.model}px ${left.model}px`
    )
  })

  it('expects to set background color properly', () => {
    const [, , , , background] = wrapper.vm.borderProps
    background.color = '#B97878FF'
    expect(wrapper.vm.bgColor).toEqual('#B97878FF')
  })
})
