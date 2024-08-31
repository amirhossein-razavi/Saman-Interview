import axios from "axios";
import { Post } from "entities/post";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get("/posts?_start=0&_limit=20");
  return response.data;
};

export const createPost = async (post: Post): Promise<Post> => {
  const response = await api.post("/posts", post);
  return response.data;
};

export const updatePost = async (post: Post): Promise<Post> => {
  const response = await api.put(`/posts/${post.id}`, post);
  return response.data;
};
