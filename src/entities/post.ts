export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  newPost: (post: Post) => void;
  updateStore: (post: Post) => void;
}
