/*
    Designated spot for form. The specifications will be filled out once the form as been decided.
*/

import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const FeedbackForm = () => {
  return (
    <div className='homescreen__feedback__form'>
      <Container>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FeedbackForm;
