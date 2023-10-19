import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    replacePosts(state, action) {
      state.posts = action.payload.posts;
    },
    createPost(state, action) {
      state.posts.push(action.payload);
    },
    updatePost(state, action) {
      const postId= action.payload.id;

      const findPost= state.posts.filter(post => post.id !== postId);
      if(!findPost) {
        return
      }
      state.posts=[action.payload , ...findPost];
    },
    deletePost(state, action) {
      const postId = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
