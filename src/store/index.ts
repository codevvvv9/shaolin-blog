import { reactive } from "vue";
import { Post } from "../types/index";
import { todayPost, thisWeek, thisMonth } from "@/mock";

/**
 * 目标是构建如下所示数据：
posts: {
    1: { id: 1, title: "今天",.... }
    2: { id: 2, title: "今天",.... }
    3: { id: 3, title: "今天",.... }
}
 */
interface PostsState {
  ids: string[];
  all: Record<string, Post>;
  loaded: boolean;
}

const initialPostsState = (): PostsState => ({
  ids: [
    // todayPost.id.toString(),
    // thisWeek.id.toString(),
    // thisMonth.id.toString(),
  ],
  all: {
    // [todayPost.id]: todayPost,
    // [thisWeek.id]: thisWeek,
    // [thisMonth.id]: thisMonth,
  },
  loaded: false,
});
interface State {
  posts: PostsState;
}

const initialState = (): State => ({
  posts: initialPostsState(),
});

class Store {
  protected state: State;

  constructor(initialState: State) {
    this.state = reactive(initialState);
  }

  /**
   * getState
   */
  public getState(): State {
    return this.state;
  }
}

const store = new Store(initialState());
export const useStore = () => store;
