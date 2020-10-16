import React from 'react';
import { PDFViewer, Page, Document, StyleSheet } from 'react-pdf';
import { InfoColumn } from './InfoColumn';
import { ContentColumn } from './ContentColumn';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Roboto',
    fontSize: 12,
  },
});

export const CascadeTemplate = () => {
  return (
    <PDFViewer className="pdf-viewer">
      <Document>
        <Page size="LETTER" style={styles.page}>
          <InfoColumn />
          <ContentColumn />
        </Page>
      </Document>
    </PDFViewer>
  );
};
