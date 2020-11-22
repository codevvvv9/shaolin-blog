import { reactive } from "vue";
import { Post } from "../types/index";
import { todayPost, thisWeek, thisMonth } from "@/mock";
import axios from 'axios';

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

  async fetchPosts() {
    const response = await axios.get<Post[]>("/posts")
    //处理数据
    const ids: string[] = []
    const all: Record<string, Post> = {}
    for (const post of response.data) {
      ids.push(post.id.toString())
      all[post.id] = post
    }

    this.state.posts = {
      ids,
      all,
      loaded: true
    }
  }
}

const store = new Store(initialState());
export const useStore = () => store;
