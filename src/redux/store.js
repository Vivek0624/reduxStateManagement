import { configureStore } from "@reduxjs/toolkit";
import { todoSlice, namesSlice } from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todoSlice.reducer,
    names: namesSlice.reducer,
  },
});
