import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gpt: gptSlice,
    config: configSlice,
  },
});

export default appStore;
