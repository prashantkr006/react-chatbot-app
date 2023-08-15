// studentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    updateStudent: (state, action) => {
      const { id, name, age } = action.payload;
      state[id] = { name, age };
    },
  },
});

export const { addStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
