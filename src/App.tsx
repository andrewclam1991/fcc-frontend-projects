import { Quote } from './features/quote/Quote';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row >
        <Col>
          <Quote />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>by aclam</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
