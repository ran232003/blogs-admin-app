import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./userSlice";
import ToastSlice from "./toastSlice";
import CommentSlice from "./commentSlice";
import PostSlice from "./postSlice";
import LoadingSlice from "./loadingData";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    toast: ToastSlice.reducer,
    comment: CommentSlice.reducer,
    post: PostSlice.reducer,
    loading: LoadingSlice.reducer,
  },
});
export default store;
