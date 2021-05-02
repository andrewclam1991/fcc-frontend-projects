import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import quoteReducer from '../features/quote/quoteSlice';
import markdownReducer from '../features/markdown/markdownSlice';

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    counter: counterReducer,
    markdown: markdownReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
