import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RPics } from "types/fetchRPics";
import { RootState } from "../../store";
import _request from "request";
import { PostState } from "types/store";

const initialState: PostState = {
  list: [],
  status: "idle",
  error: undefined,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
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

export const fetchList = createAsyncThunk(
  "post/fetchList",
  async (url: string) => {
    const res = await _request<RPics, null>({
      url: url,
      method: "GET",
    });
    return res.data.children.map((item) => {
      return {
        id: item.data.id,
        title: item.data.title,
        image: item.data.url,
        date: item.data.created_utc,
        author: item.data.author,
        authorAvatar: item.data.thumbnail,
        vote: item.data.ups,
        commentTotal: item.data.num_comments,
        permalink: item.data.permalink,
      };
    });
  }
);

export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;
