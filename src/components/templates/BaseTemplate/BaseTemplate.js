import React from 'react';
import { PDFViewer, Page, Document } from 'react-pdf';
import PropTypes from 'prop-types';

export const generatePDFTemplate = ({ Template, styles, displayName }) => {
  const WrappedTemplate = ({ data }) => {
    if (data === undefined) {
      return <div></div>;
    }
    return (
      <React.Fragment>
        <PDFViewer className="pdf-viewer">
          <Document>
            <Page size="LETTER" style={styles.page}>
              <Template data={data} />
            </Page>
          </Document>
        </PDFViewer>
      </React.Fragment>
    );
  };

  WrappedTemplate.displayName = displayName;

  WrappedTemplate.propTypes = {
    data: PropTypes.object,
  };

  return WrappedTemplate;
};
