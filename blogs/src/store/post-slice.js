import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    updateStatus: true,
  },
  reducers: {
    replacePosts(state, action) {
      state.posts = action.payload.posts;
    },
    createPost(state, action) {
      state.posts.push(action.payload);
    },
    updatePost(state, action) {
      state.updateStatus = action.payload;
    },
    // deletePost(state, action) {
    //   const postId = action.payload;
    //   state.posts = state.posts.filter((post) => post.id !== postId);
    // },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
