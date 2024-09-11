import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date();
const sevenDaysAgo = new Date(currentDate);
sevenDaysAgo.setDate(currentDate.getDate() - 7);

const formattedDateToday = `${currentDate.getDate()}/${
  currentDate.getMonth() + 1
}/${currentDate.getFullYear()}`;

const formattedDateWeek = `${sevenDaysAgo.getDate()}/${
  sevenDaysAgo.getMonth() + 1
}/${sevenDaysAgo.getFullYear()}`;

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    filteredPosts: [],
  },
  reducers: {
    replacePosts(state, action) {
      state.posts = action.payload.posts;
      state.filteredPosts = state.posts.filter(
        (post) => post.dateCreated >= formattedDateToday
      );
    },
    createPost(state, action) {
      state.posts.push(action.payload);
    },
    updatePost(state, action) {
      const postId = action.payload.id;

      const findPost = state.posts.filter((post) => post.id !== postId);
      if (!findPost) {
        return;
      }
      state.posts = [action.payload, ...findPost];
    },
    deletePost(state, action) {
      const postId = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
    filterPosts(state, action) {
      const selectedOption = action.payload;

      if (selectedOption === "Today") {
        state.filteredPosts = state?.posts?.filter(
          (post) => post.dateCreated >= formattedDateToday
        );
      } else if (selectedOption === "This Week") {
        state.filteredPosts = state.posts.filter(
          (post) => post.dateCreated <= formattedDateWeek
        );
      } else {
        state.filteredPosts = state.posts;
      }
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
