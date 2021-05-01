import axios from 'axios';
export interface Quote {
  quote: string,
  author: string,
}
export interface fetchQuotesResponse {
  quotes: Quote[];
}

const fetchQuotesUrl = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

export function fetchQuotes() {
  return axios.get<fetchQuotesResponse>(fetchQuotesUrl)
    .then((response) => response.data)
    .then((data) => data.quotes);
}