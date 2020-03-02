import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import CreditCardGenerator from '@/pages/credit-card-generator.vue'

describe('Color Picker', () => {
  let vuetify
  let wrapper
  beforeAll(() => {
    vuetify = new Vuetify({
      mocks: {
        $vuetify: {
          lang: {
            t: () => ''
          }
        }
      }
    })
    wrapper = mount(CreditCardGenerator, { vuetify })
  })

  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
