import { configureStore } from "@reduxjs/toolkit";
import { todoSlice, namesSlice } from "./todoSlice";
import { userSlice } from "./userSlice";

export default configureStore({
  reducer: {
    todos: todoSlice.reducer,
    names: namesSlice.reducer,
    users: userSlice.reducer,
  },
});
