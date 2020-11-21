import { mount } from "@vue/test-utils";
import Timeline from "@/components/Timeline.vue";

describe("Timeline.vue", () => {
  it("测试Timeline组件中会有3个a标签", () => {
    const wrapper = mount(Timeline);
    // console.log("wrapper", wrapper.html())
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3);
  });
  it("测试Timeline组件中a标签的点击事件功能", async () => {
    const wrapper = mount(Timeline);
    const $today = wrapper.findAll("[data-test='period']")[0];
    const $thisWeek = wrapper.findAll("[data-test='period']")[1];
    const $thisMonth = wrapper.findAll("[data-test='period']")[2];
    expect($today.classes()).toContain("is-active");

    await $thisWeek.trigger("click");
    expect($today.classes()).not.toContain("is-active");
    expect($thisWeek.classes()).toContain("is-active");

    await $thisMonth.trigger("click");
    expect($today.classes()).not.toContain("is-active");
    expect($thisWeek.classes()).not.toContain("is-active");
    expect($thisMonth.classes()).toContain("is-active");
  });
  it("测试Timeline组件中会有3个a标签", () => {
    const wrapper = mount(Timeline);
    // console.log("wrapper", wrapper.html())
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3);
  });
});
