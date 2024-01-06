import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: [],
    error: null,
  },
  reducers: {
    allServices(state, action) {
      state.services = action.payload.services;
    },
    createService(state, action) {
      state.services = [action.payload, ...state.services];
    },
    showError(state, action) {
      state.error = {
        status: action.payload.status,
        title: action.payload.title,
      };
    },
  },
});

export const serviceActions = serviceSlice.actions;

export default serviceSlice;
