import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./userSlice";
import ToastSlice from "./toastSlice";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    toast: ToastSlice.reducer,
  },
});
export default store;
