import React from 'react';
import { PDFViewer, Page, Document } from 'react-pdf';
import PropTypes from 'prop-types';

export const generatePDFTemplate = ({ Template, displayName }) => {
  const WrappedTemplate = ({ data, style }) => {
    if (data === undefined) {
      return <div></div>;
    }
    return (
      <React.Fragment>
        <PDFViewer className="pdf-frame">
          <Document title="your_resume.pdf">
            <Page size="LETTER" style={style.page}>
              <Template data={data} style={style} />
            </Page>
          </Document>
        </PDFViewer>
      </React.Fragment>
    );
  };

  WrappedTemplate.displayName = displayName;

  WrappedTemplate.propTypes = {
    data: PropTypes.object,
    style: PropTypes.object,
  };

  return WrappedTemplate;
};
