import moment from "moment";
import { Post } from "@/types";

export const basePost: Post = {
  id: 1,
  title: "在线课堂",
  markdown: "课程列表",
  html: "<p>课程列表</p>",
  authorId: 1,
  created: moment(),
};
export const todayPost: Post = {
  ...basePost,
  title: "今天",
};
export const thisWeek: Post = {
  ...basePost,
  title: "本周",
  created: moment().subtract(2, "day"),
};
export const thisMonth: Post = {
  ...basePost,
  title: "本月",
  created: moment().subtract(2, "week"),
};
