import { mount } from '@vue/test-utils'
import Base64Converter from '@/pages/base-64-converter'
import { encode, decode } from '@/utils/base64'

describe('Base 64 converter', () => {
  const wrapper = mount(Base64Converter)
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should encode and decode to base 64 properly', () => {
    const text = 'any text here'
    wrapper.vm.text = text
    expect(wrapper.vm.result).toEqual(encode(text))
    wrapper.vm.encodeOrDecode = false
    expect(wrapper.vm.result).toEqual(decode(text))
  })
})
