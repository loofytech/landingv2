import { createSlice } from "@reduxjs/toolkit";

const homeReducer = createSlice({
  name: "homeReducer",
  initialState: {
    FIRST: true,
    SECOND: false
  },
  reducers: {
    setFirst: (state, param) => {
      state.FIRST = param.payload;
    },
    setSecond: (state, param) => {
      state.SECOND = param.payload;
    }
  }
});

export const {setFirst, setSecond} = homeReducer.actions;

export default homeReducer.reducer;