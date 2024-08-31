import React from "react";
import { TextField, Button } from "@mui/material";

import { StyledPaper, StyledLoading } from "./styles";
import usePostForm from "useCases/usePostForm";

const PostForm: React.FC = () => {
  const { loading, onSubmit, register, handleSubmit } = usePostForm();

  return (
    <StyledPaper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField size="small" required label="Title" {...register("title")} />
        <TextField
          size="small"
          required
          label="User ID"
          {...register("userId")}
        />
        <TextField size="small" required label="Body" {...register("body")} />
        <Button type="submit" variant="contained">
          {loading ? <StyledLoading /> : "Submit"}
        </Button>
      </form>
    </StyledPaper>
  );
};

export default PostForm;
