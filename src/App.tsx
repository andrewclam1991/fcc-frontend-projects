import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Quote } from './features/quote/Quote';
import { Markdown } from './features/markdown/Markdown';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/random-quote-generator">Random Quote Generator</Link>
            </li>
            <li>
              <Link to="/markdown-previewer">Markdown Previewer</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/random-quote-generator" component={Quote}/>
        <Route path="/markdown-previewer" component={Markdown} />
        <Route path="/" component={Quote} />
      </Switch>
    </Router>
  );
}
