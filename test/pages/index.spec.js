import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Index from '@/pages/index.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Color Picker', () => {
  const wrapper = mount(Index, { router, localVue })

  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
