import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    filter: "",
  },
  reducers: {
    addToFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default searchSlice;
