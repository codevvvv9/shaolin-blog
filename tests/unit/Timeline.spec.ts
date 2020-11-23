import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import * as mockData from "@/mock";
import flushPromises from "flush-promises";

//使用jest做模拟数据
jest.mock("axios", () => ({
  get: (url: string) => ({
    data: [mockData.todayPost, mockData.thisWeek, mockData.thisMonth],
  }),
}));

describe("Home.vue", () => {
  it("测试加载动画", () => {
    const wrapper = mount(Home);
    expect(wrapper.find("[data-test='progress']").exists()).toBe(true);
  });

  it("测试3个a标签", async () => {
    const wrapper = mount(Home);
    
    // console.log("wrapper", wrapper.html());
    await flushPromises();
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3);
  });

  it("测试a标签的点击事件功能", async () => {
    const wrapper = mount(Home);
    await flushPromises();

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

  it("测试数据加载功能", async () => {
    const wrapper = mount(Home);
    // console.log("wrapper", wrapper.html())
    await flushPromises()

    expect(wrapper.findAll("[data-test='post']")).toHaveLength(1)

    const $thisWeek = wrapper.findAll("[data-test='period']")[1]
    await $thisWeek.trigger('click')
    expect(wrapper.findAll("[data-test='post']")).toHaveLength(2);

    const $thisMonth = wrapper.findAll("[data-test='period']")[2]
    await $thisMonth.trigger('click')
    expect(wrapper.findAll("[data-test='post']")).toHaveLength(3)
  });
});
