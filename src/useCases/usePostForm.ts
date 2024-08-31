import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createPost } from "services/requests";
import { Post } from "entities/post";
import { usePostStore } from "store/postStore";

const usePostForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<Post>();
  const { newPost } = usePostStore();

  const mutation = useMutation(createPost, {
    onSuccess: (data) => {
      newPost(data);
      setLoading(false);
      reset();
    },
    onError: () => setLoading(false),
  });

  const onSubmit = (data: Post) => {
    setLoading(true);
    mutation.mutate(data);
  };

  return {
    loading,
    onSubmit,
    register,
    handleSubmit,
  };
};

export default usePostForm;
