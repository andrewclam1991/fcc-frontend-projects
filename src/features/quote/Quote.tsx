import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getNextQuote } from './quoteSlice';

export function Quote() {
  const quote = useAppSelector(state => state.quote);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNextQuote())
  },[dispatch])

  return (
    <div id="quote-box">
      <span
        id="text">
        {quote.text}
      </span>
      <span
        id="author">
        {quote.author}
      </span>
      <a
        id="tweet-quote"
        href="https://twitter.com/intent/tweet"
        target="_blank"
        rel="noreferrer">
        Tweet
      </a>
      <button
        id="new-quote"
        aria-label="Get Quote"
        onClick={() => dispatch(getNextQuote())}>
        New Quote
      </button>
    </div>
  );
}