import { Container, Row, Col } from "react-bootstrap";
import { MarkdownEditor } from "./editor/MarkdownEditor";
import { MarkdownPreview } from "./preview/MarkdownPreview";

export function Markdown() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={6}>
          <MarkdownEditor />
        </Col>
        <Col xs={12} lg={6}>
          <MarkdownPreview />
        </Col>
      </Row>
    </Container>
  );
}