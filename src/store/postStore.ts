import { create } from "zustand";
import { Post, PostState } from "entities/post";

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  setPosts: (posts: Post[]) => set({ posts }),
  newPost: (post: Post) =>
    set((state) => ({
      ...state,
      posts: [...state.posts, { ...post, id: state.posts.length + 1 }],
    })),
  updateStore: (post: Post) =>
    set((state) => ({
      ...state,
      posts: state.posts.map((item) => (item.id === post.id ? post : item)),
    })),
}));
