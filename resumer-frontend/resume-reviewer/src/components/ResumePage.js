import React from 'react';
import { Image } from 'react-bootstrap';
//import ResumePagePDF from './ResumePagePDF';
//import { sampleBase64pdf } from './sampleBase64pdf';
//import samplePDF from './sivamResume.pdf';
import resumeImage from './resume-image.png';

const ResumePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/*<ResumePagePDF pdf='http://www.pdf995.com/samples/pdf.pdf' />*/}
      <Image src={resumeImage} fluid />
    </div>
  );
};

export default ResumePage;
