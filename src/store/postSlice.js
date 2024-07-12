import { createSlice } from "@reduxjs/toolkit";
const PostSlice = createSlice({
  name: "comment",
  initialState: { dashBoardPosts: [] },
  reducers: {
    setDashBoardPosts(state, action) {
      //console.log(action.payload);
      state.dashBoardPosts = action.payload;
    },
  },
});

export default PostSlice;

export const postAction = PostSlice.actions;
