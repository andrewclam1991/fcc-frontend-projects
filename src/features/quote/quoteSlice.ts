import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store";

interface QuoteState{
  text: string,
  author: string,
};

const initialState: QuoteState = {
  text: "",
  author: "",
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    getNextQuote: (state) => {
      state.text = state.text + "2";
      state.author = 'Andrew Lam';
    },
  }
});

export const { getNextQuote } = quoteSlice.actions;

export const selectText = (state: RootState) => state.quote.text;
export const selectAuthor = (state: RootState) => state.quote.author;

export default quoteSlice.reducer;