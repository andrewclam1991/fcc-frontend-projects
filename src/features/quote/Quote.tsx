import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getRandomQuote } from './quoteSlice';

export function Quote() {
  const quote = useAppSelector(state => state.quote);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRandomQuote())
  }, [dispatch])

  return (
    <Jumbotron fluid id="quote-box">
      <Container>
        <Row>
          <Col>
            <h1
              id="text"
              className="display-5">
              <FontAwesomeIcon icon={faQuoteLeft} />
              &nbsp;
              {quote.quote}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p
              className="lead text-right"
              id="author">
              {quote.author}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              id="tweet-quote"
              href={quote.tweetQuote}
              target="_blank"
              rel="noreferrer"
              className="display-4">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </Col>
          <Col>
            <p
              className="lead text-right">
              <Button
                variant="primary"
                id="new-quote"
                onClick={() => dispatch(getRandomQuote())}>
                New Quote
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}