import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import _request from "request";
import { SubredditState } from "types/store";
import { Subreddits } from "types/fetchSubreddits";

const initialState: SubredditState = {
  list: [],
  currentId: "",
  status: "idle",
  error: undefined,
};

export const SubredditSlice = createSlice({
  name: "subreddit",
  initialState,
  reducers: {
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchList = createAsyncThunk("subreddit/fetchList", async () => {
  const res = await _request<Subreddits, null>({
    url: "subreddits.json",
    method: "GET",
  });
  return res.data.children.map((item) => {
    return {
      id: item.data.id,
      title: item.data.display_name,
      image: item.data.icon_img,
      key_color: item.data.key_color,
    };
  });
});

export const selectSubreddit = (state: RootState) => state.subreddit;
export default SubredditSlice.reducer;
