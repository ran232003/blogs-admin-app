import { createSlice } from "@reduxjs/toolkit";
const CommentSlice = createSlice({
  name: "comment",
  initialState: { dashBoardComments: [] },
  reducers: {
    setDashBoardComments(state, action) {
      state.dashBoardComments = action.payload;
    },
  },
});

export default CommentSlice;

export const commentAction = CommentSlice.actions;
