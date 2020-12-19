import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function ResumePage({ pdf }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div>
      <Document
        file='https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:462e0b69-acad-451d-b0f8-145005558396'
        options={{ workerSrc: 'pdf.worker.js' }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button type='button' disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type='button'
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
