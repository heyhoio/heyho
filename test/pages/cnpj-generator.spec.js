import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import CnpjGenerator from '@/pages/cnpj-generator.vue'

describe('Color Picker', () => {
  let vuetify
  let wrapper
  beforeAll(() => {
    vuetify = new Vuetify()
    wrapper = mount(CnpjGenerator, { vuetify })
  })

  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should create random valid cnpj', () => {
    const button = wrapper.findAll('.cnpj-generator__button')
    button.trigger('click')
    expect(wrapper.vm.result.cnpj).not.toBeNull()
    expect(wrapper.vm.result.cnpj).not.toBeUndefined()
    expect(wrapper.vm.result.cnpj).not.toEqual('')
  })

  it('should create random valid cnpj with mask', () => {
    const button = wrapper.findAll('.cnpj-generator__button')
    button.trigger('click')
    expect(wrapper.vm.result.maskCnpj).not.toBeNull()
    expect(wrapper.vm.result.maskCnpj).not.toBeUndefined()
    expect(wrapper.vm.result.maskCnpj).not.toEqual('')
    expect(wrapper.vm.result.maskCnpj).toContain('.')
    expect(wrapper.vm.result.maskCnpj).toContain('-')
    expect(wrapper.vm.result.maskCnpj).toContain('/')
  })

  it('should copy text for clipboard', () => {
    const mockFn = jest.fn(text => {
      return text
    })
    wrapper.setMethods({
      saveToClipBoard: mockFn
    })

    const button = wrapper.findAll('.cnpj-generator__button')
    button.trigger('click')
    const cnpj = wrapper.vm.result.cnpj
    const text = wrapper.vm.saveToClipBoard(cnpj)
    expect(cnpj).toEqual(text)
  })

  it('should show snack bar when copy text', () => {
    const mockFn = jest.fn(text => {
      wrapper.vm.snackbar = true
      return text
    })
    wrapper.setMethods({
      saveToClipBoard: mockFn
    })

    const button = wrapper.findAll('.cnpj-generator__button')
    button.trigger('click')
    const cnpj = wrapper.vm.result.cnpj
    wrapper.vm.saveToClipBoard(cnpj)
    const snackbar = wrapper.findAll('.cnpj-generator__snack-bar')
    expect(snackbar).not.toBeNull()
    expect(snackbar).not.toBeUndefined()
  })
})
