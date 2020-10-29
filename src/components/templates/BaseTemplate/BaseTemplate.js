import React from 'react';
import { PDFViewer, Page, Document } from 'react-pdf';

export const generatePDFTemplate = ({ Template, styles, displayName }) => {
  const WrappedTemplate = () => (
    <PDFViewer className="pdf-viewer">
      <Document>
        <Page size="LETTER" style={styles.page}>
          <Template />
        </Page>
      </Document>
    </PDFViewer>
  );

  WrappedTemplate.displayName = displayName;

  return WrappedTemplate;
};
