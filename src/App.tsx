import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Quote } from './features/quote/Quote';
import { Markdown } from './features/markdown/Markdown';

function App() {
  return (
    <>
      <Quote />
      <Markdown />
    </>
  );
}

export default App;
