import { useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getOuput } from "./markdownSlice";

export const MarkdownPreview = () => {
  const output = useAppSelector(state => state.markdown.output);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getOuput())
  }, [dispatch])

  return <>
    <Form>
      <Form.Group>
        <Form.Label>Previewer</Form.Label>
        <Card>
          <Card.Body>
            <div
              id='preview'
              dangerouslySetInnerHTML={{
                __html: output
              }}
            />
          </Card.Body>
        </Card>
      </Form.Group>
    </Form>
  </>
}