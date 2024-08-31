import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";

import { getPosts, updatePost } from "services/requests";
import { usePostStore } from "store/postStore";
import { Post } from "entities/post";

const usePostList = () => {
  const { posts, setPosts, updateStore } = usePostStore();
  const [selectedPost, setSelectedPost] = useState(-1);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<Post>();

  const mutation = useMutation(updatePost, {
    onSuccess: (data) => {
      updateStore(data);
      setLoading(false);
      setSelectedPost(-1);
    },
    onError: () => setLoading(false),
  });

  const onSubmit = (data: Post) => {
    setLoading(true);
    mutation.mutate(data);
  };

  useQuery("posts", getPosts, {
    onSuccess: (data) => {
      !posts.length && setPosts(data);
    },
  });

  return {
    posts,
    selectedPost,
    loading,
    onSubmit,
    setSelectedPost,
    register,
    handleSubmit,
    reset,
  };
};

export default usePostList;
