import { Form } from "react-bootstrap"
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setInput } from "./markdownSlice";

export const MarkdownEditor = () => {
  const input = useAppSelector(state => state.markdown.input);
  const dispatch = useAppDispatch();
  
  return <>
    <Form>
      <Form.Group>
        <Form.Label>Editor</Form.Label>
        <Form.Control
          id="editor"
          as="textarea"
          rows={5}
          value={input}
          onChange={event => {
            dispatch(setInput(event.target.value))
          }}
        />
      </Form.Group>
    </Form>
  </>
}