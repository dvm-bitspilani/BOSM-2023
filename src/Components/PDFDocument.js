import React from "react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import pdfFile from "../images/BOSMRulebooks.pdf";
import * as styles from "../Styles/Articles.module.css";

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Create Document Component
export default function PDFDocument() {

  const [numPages, setNumPages] = React.useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={pdfFile}
      onLoadSuccess={onDocumentLoadSuccess}
      options={options}
      className={styles.pdf}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          className={styles.pdfpage}
          renderTextLayer={false}
          renderInteractiveForms={false}
        />
      ))}
    </Document>
  );
}
