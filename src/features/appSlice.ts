import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
const initialState = {
  name: "REACT REDDIT",
  search: "",
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const selectApp = (state: RootState) => state.app;
export const { setSearch } = appSlice.actions;
export default appSlice.reducer;
