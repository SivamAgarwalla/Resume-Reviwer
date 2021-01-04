import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FeedbackForm from '../components/FeedbackForm';
import PDFViewer from 'pdf-viewer-reactjs-bulma-wrapped';

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Row>
        <Col sm={8}>
        <PDFViewer
            document={{
                url: 'https://cors-anywhere.herokuapp.com/https://www.sjsu.edu/careercenter/docs/resume-samples-new/Resume_Psychology.pdf',
            }}
        />
        </Col>
        <Col sm={4}>
          <FeedbackForm />
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
