import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import '../../css/resume-pdf.css';

class ResumePDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          className="pdf-resume-document"
          file={require('../../assets/pdf/panyan_english_version.pdf')}
          onLoadSuccess={this.onDocumentLoadSuccess}
          loading={<div className="pdf-resume-loading">Please wait!</div>}
          onLoadError={(error) => alert('Error while loading pages! ' + error.message)}
          noData="Please select a file."
        >
          <Page
            pageNumber={pageNumber}
            onLoadError={(error) => alert('Error while retreiving the outline! ' + error.message)}
           />
        </Document>
        {numPages && <p style={{"text-align":"center"}}>Page {pageNumber} of {numPages}</p>}
      </div>
    );
  }
}

ResumePDF.propTypes = {

}

export default ResumePDF;
