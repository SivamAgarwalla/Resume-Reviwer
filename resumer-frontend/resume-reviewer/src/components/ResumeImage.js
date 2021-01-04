import React from 'react';
import ResumePagePDF from './ResumePagePDF';
import {Document, Page} from 'react-pdf';
//import { sampleBase64pdf } from './sampleBase64pdf';
import PDFViewer from 'pdf-viewer-reactjs'
import samplePDF from './sivamResume.pdf';

const ResumeImage = () => {
  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default ResumeImage;


