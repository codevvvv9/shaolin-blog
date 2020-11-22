import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import * as mockData from "@/mock";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
//@ts-ignore
axios.get = async (url: string) => {
  if (url === "/posts") {
    await delay(1000);
    return Promise.resolve({
      data: [mockData.todayPost, mockData.thisWeek, mockData.thisMonth],
    });
  }
};
const app = createApp(App);
app.use(router);
app.mount("#app");
