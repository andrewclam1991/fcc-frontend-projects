import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getRandomQuote } from './quoteSlice';

export function Quote() {
  const quote = useAppSelector(state => state.quote);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRandomQuote())
  }, [dispatch])

  return (
    <Jumbotron fluid id="quote-box" className="jumbotron">
      <Container>
        <h1
          id="text">
          {quote.quote}
        </h1>
        <p
          id="author">
          {quote.author}
        </p>
        <a
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
          target="_blank"
          rel="noreferrer">
          Tweet
        </a>
        <p>
          <Button
            id="new-quote"
            onClick={() => dispatch(getRandomQuote())}>
            New Quote
          </Button>
        </p>
      </Container>
    </Jumbotron>
  );
}