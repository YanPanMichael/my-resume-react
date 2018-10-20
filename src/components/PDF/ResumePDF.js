import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import '../../css/resume-pdf.css';

class ResumePDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { numPages } = this.state;

    return (
      /* eslint-disable global-require */
      <div className="pdf-resume">
        <Document
          className="pdf-resume-document"
          file={require('../../assets/pdf/panyan_english_version.pdf')}
          onLoadSuccess={this.onDocumentLoadSuccess}
          loading={<div className="pdf-resume-loading">Please wait!</div>}
          onLoadError={error => alert(`Error while loading pages! ${error.message}`)}
          noData="Please select a file."
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div>
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                onLoadError={error => alert(`Error while retreiving the outline! ${error.message}`)}
                scale="1.5"
              />
              <p className="pdf-resume-bottom-pages">Page {index + 1} of {numPages}</p>
            </div>
          ))}
        </Document>
      </div>
    );
  }
}

export default ResumePDF;
