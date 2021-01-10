/*
    Designated spot for form. The specifications will be filled out once the form as been decided.
*/

import React from 'react';
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

const FeedbackForm = () => {
  return (
    <div
      className='homescreen__feedback__form'
      style={{ marginTop: '20px', marginBottom: '20px' }}
    >
      <Container>
        <Form>
          {/* First Part */}
          <Form.Group controlId='exampleForm.ControlSelect2'>
            <Form.Label>Overall Rating</Form.Label>
            <Form.Control as='select' multiple>
              <option>1 - Needs Work</option>
              <option>2 - Below Average</option>
              <option>3 - Average</option>
              <option>4 - Above Average</option>
              <option>5 - Exceptional</option>
            </Form.Control>
          </Form.Group>
          {/* Second Part */}
          <Form.Group as={Row}>
            <Form.Label as='legend' column sm={4}>
              Strengths
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                label='Education Section'
                name='formHorizontalRadios'
                id='formHorizontalRadios1'
              />
              <Form.Check
                label='Experience Section'
                name='formHorizontalRadios'
                id='formHorizontalRadios2'
              />
              <Form.Check
                label='Technical Projects Section'
                name='formHorizontalRadios'
                id='formHorizontalRadios3'
              />
              <Form.Check
                label='Layout/Structure'
                name='formHorizontalRadios'
                id='formHorizontalRadios3'
              />
              <Form.Check
                label='Overall Wording/Grammar'
                name='formHorizontalRadios'
                id='formHorizontalRadios3'
              />
            </Col>
          </Form.Group>
          {/* Third Part */}
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Feedback</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as='textarea' aria-label='With textarea' />
          </InputGroup>
          <Button style={{ marginTop: '20px' }} variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FeedbackForm;
