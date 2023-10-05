import { createSlice } from "@reduxjs/toolkit";

const date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let currentDate = `${day}/${month}/${year}`;

const dummyPosts = [
  {
    id: 1,
    title: "Spring Boot",
    description: "Rappid  application development",
    dateCreated: currentDate,
    author: "Oracle",
    imagePath:
      "https://media.istockphoto.com/id/1433211776/photo/woman-silhouette-in-front-of-the-ocean-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=xGzw_4wTjK0uKJLS42lR7xPsD7tGRTrx-mWBl0ylih4=",
  },
  {
    id: 2,
    title: "React",
    description: "Javascript Library",
    dateCreated: currentDate,
    author: "Facebook",
    imagePath:
      "https://images.freeimages.com/images/large-previews/3b2/prague-conference-center-1056491.jpg",
  },
  {
    id: 3,
    title: "Html",
    description: "Hypertext Markup Language",
    dateCreated: currentDate,
    author: "Browser",
    imagePath:
      "https://images.freeimages.com/images/large-previews/3c0/jellyfish-1507290.jpg?fmt=webp&w=350",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: dummyPosts,
  },
  reducers: {
    createPost(state, action) {
      state.posts.push(action.payload);
    },
    updatePost(state, action) {
      const updatedPost = action.payload;
      const currentItemId = updatedPost.id;
      const postIndex = state.posts.findIndex(
        (item) => item.id === currentItemId
      );
      if (postIndex !== -1) {
        state.posts[postIndex] = updatedPost;
      }
    },
    deletePost(state,action) {
      const postId= action.payload;
      state.posts= state.posts.filter((post) => post.id !== postId);
    }
  },
});

export const postActions = postSlice.actions;

export default postSlice;
