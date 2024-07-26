import { createSlice } from "@reduxjs/toolkit";
const PostSlice = createSlice({
  name: "comment",
  initialState: { dashBoardPosts: [], postSearch: [] },
  reducers: {
    setDashBoardPosts(state, action) {
      //console.log(action.payload);
      state.dashBoardPosts = action.payload;
    },
    setPostSearch(state, action) {
      //console.log(action.payload);
      state.postSearch = action.payload;
    },
  },
});

export default PostSlice;

export const postAction = PostSlice.actions;
