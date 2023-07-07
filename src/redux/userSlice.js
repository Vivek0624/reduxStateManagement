import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [
    { id: 1, name: "Vivek", completed: false },
    { id: 2, name: "ajay", completed: false },
    { id: 3, name: "vedant", completed: false },
    { id: 4, name: "shubham", completed: false },
  ],
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        name: action.payload.name,
        completed: false,
      };
      state.push(newUser);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addUser, toggleComplete } = userSlice.actions;

export default userSlice;

// export const { todo1Slice, todoSlice } =
