import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
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
    <Container>
      <Row>
        <Col>
          <Card id="quote-box">
            <Card.Title
              id="author">
              {quote.status}
              {quote.author}
            </Card.Title>
            <Card.Body
              id="text">
              {quote.quote}
            </Card.Body>
            <a
              id="tweet-quote"
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noreferrer">
              Tweet
            </a>
            <Button
              id="new-quote"
              onClick={() => dispatch(getRandomQuote())}>
              New Quote
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}