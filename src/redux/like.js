import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedIds: [],
  count: 0,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload;
      const index = state.likedIds.indexOf(id);
      if (index >= 0) {
        state.likedIds.splice(index, 1);
        state.count -= 1;
      } else {
        state.likedIds.push(id);
        state.count += 1;
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;