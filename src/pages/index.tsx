import React from "react";
import PostForm from "components/postForm";
import PostList from "components/postList";

const HomePage: React.FC = () => {
  return (
    <>
      <PostForm />
      <PostList />
    </>
  );
};

export default HomePage;
