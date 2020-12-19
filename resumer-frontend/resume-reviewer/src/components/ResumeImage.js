import React from 'react';
import ResumePagePDF from './ResumePagePDF';
//import { sampleBase64pdf } from './sampleBase64pdf';
//import samplePDF from './sivamResume.pdf';

const ResumeImage = () => {
  return (
    <div>
      <ResumePagePDF pdf='http://www.pdf995.com/samples/pdf.pdf' />
    </div>
  );
};

export default ResumeImage;
