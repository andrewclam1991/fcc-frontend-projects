import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store";
import { fetchQuotes } from "./quoteAPI";
interface QuoteState {
  quote: string;
  author: string;
  tweetQuote: string;
  status: "idle" | "loading" | "failed";
};

const initialState: QuoteState = {
  quote: "",
  author: "",
  tweetQuote: "",
  status: "idle",
};

export const getRandomQuote = createAsyncThunk(
  "quote/getRandomQuote",
  async () => {
    const quotes = await fetchQuotes();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
);

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomQuote.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getRandomQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRandomQuote.fulfilled, (state, action) => {
        state.status = "idle";
        state.quote = action.payload.quote;
        state.author = action.payload.author;
        state.tweetQuote = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${state.quote}"- ${state.author}`)}`;
      });
  },
});

export const selectText = (state: RootState) => state.quote.quote;
export const selectAuthor = (state: RootState) => state.quote.author;

export default quoteSlice.reducer;