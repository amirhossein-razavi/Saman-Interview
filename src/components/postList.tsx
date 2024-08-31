import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Paper,
  Button,
  TextField,
} from "@mui/material";

import { StyledLoading, StyledTableCell, StyledTableRow } from "./styles";
import usePostList from "useCases/usePostList";

const PostList: React.FC = () => {
  const {
    posts,
    selectedPost,
    loading,
    onSubmit,
    setSelectedPost,
    register,
    handleSubmit,
    reset,
  } = usePostList();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Body</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {posts.map(({ id, title, body, userId }) => {
              const editMode = selectedPost === id;
              return (
                <StyledTableRow key={id}>
                  <StyledTableCell>{id}</StyledTableCell>
                  <StyledTableCell>
                    {editMode ? (
                      <TextField
                        required
                        label="Title"
                        {...register("title")}
                      />
                    ) : (
                      title
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    {editMode ? (
                      <TextField
                        required
                        label="Body"
                        {...register("body")}
                        multiline
                        maxRows={4}
                        style={{ width: "100%" }}
                      />
                    ) : (
                      body
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    {editMode && (
                      <Button variant="contained" type="submit">
                        {loading ? <StyledLoading /> : "Submit"}
                      </Button>
                    )}
                    {!editMode && (
                      <Button
                        variant="contained"
                        onClick={() => {
                          setSelectedPost(id);
                          reset({
                            title,
                            body,
                            userId,
                            id,
                          });
                        }}
                      >
                        Edit
                      </Button>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
};

export default PostList;
