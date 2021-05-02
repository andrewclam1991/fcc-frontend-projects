import { Container, Row, Col } from "react-bootstrap";
import { MarkdownEditor } from "./Editor";
import { MarkdownPreview } from "./Preview";

export function Markdown() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <MarkdownEditor />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <MarkdownPreview />
        </Col>
      </Row>
    </Container>
  );
}