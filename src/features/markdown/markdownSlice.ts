import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { parseMarkdown } from "../markdown/markdownService";

interface MarkdownState {
  input: string;
  output: string;
}

const initialState: MarkdownState = {
  input: "",
  output: "",
};

export const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
      state.output = parseMarkdown(state.input);
    }
  },
});

export const { setInput } = markdownSlice.actions;

export const selectInput = (state: RootState) => state.markdown.input;
export const selectOutput = (state: RootState) => state.markdown.output;

export default markdownSlice.reducer;