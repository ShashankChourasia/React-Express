import { createSlice } from "@reduxjs/toolkit";

const postSlice= createSlice({
    name: 'post',
    initialState: {
        posts: []
    }
});