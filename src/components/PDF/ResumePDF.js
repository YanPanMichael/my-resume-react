import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import '../../css/resume-pdf.css';

class ResumePDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="pdf-resume">
        <Document
          className="pdf-resume-document"
          /* eslint-disable global-require */
          file={require('../../assets/pdf/panyan_english_version.pdf')}
          onLoadSuccess={this.onDocumentLoadSuccess}
          loading={<div className="pdf-resume-loading">Please wait!</div>}
          onLoadError={error => alert(`Error while loading pages! ${error.message}`)}
          noData="Please select a file."
        >
          <Page
            pageNumber={pageNumber}
            onLoadError={error => alert(`Error while retreiving the outline! ${error.message}`)}
            scale="1.5"
          />
        </Document>
        {numPages
          && <p className="pdf-resume-bottom-pages">Page {pageNumber} of {numPages}</p>}
      </div>
    );
  }
}

export default ResumePDF;
