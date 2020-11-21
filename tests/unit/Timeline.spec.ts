import { mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline.vue'

describe('Timeline.vue', () => {
  it('Timeline组件中会有3个a标签', () => {
    const wrapper = mount(Timeline)
    // console.log("wrapper", wrapper.html())
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3)
  })
})
