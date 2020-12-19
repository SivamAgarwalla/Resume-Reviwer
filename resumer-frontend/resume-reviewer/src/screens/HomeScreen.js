import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ResumeImage from '../components/ResumeImage';
import FeedbackForm from '../components/FeedbackForm';

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Row>
        <Col sm={8}>
          <ResumeImage />
        </Col>
        <Col sm={4}>
          <FeedbackForm />
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
