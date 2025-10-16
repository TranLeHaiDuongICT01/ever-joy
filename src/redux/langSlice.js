import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("lang") || "EN",
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
