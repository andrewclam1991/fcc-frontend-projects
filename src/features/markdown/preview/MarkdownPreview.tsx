import { Form } from "react-bootstrap";
import { useAppSelector } from "../../../app/hooks";

export const MarkdownPreview = () => {
  const output = useAppSelector(state => state.markdown.output);
  
  return <>
    <Form>
      <Form.Group>
        <Form.Label>Previewer</Form.Label>
        <Form.Control as="textarea" rows={5} value={output} readOnly/>
      </Form.Group>
    </Form>
  </>
}