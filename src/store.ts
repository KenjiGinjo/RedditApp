import { configureStore } from "@reduxjs/toolkit";
import app from "./features/appSlice";
import post from "./features/post/postSlice";
import subreddit from "./features/subreddits/subredditsSlice";

export const store = configureStore({
  reducer: {
    app: app,
    post: post,
    subreddit: subreddit,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
