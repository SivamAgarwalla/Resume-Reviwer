import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ResumePage from '../components/ResumePage';
import FeedbackForm from '../components/FeedbackForm';

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Row>
        <Col sm={8}>
          <ResumePage />
        </Col>
        <Col sm={4}>
          <FeedbackForm />
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
