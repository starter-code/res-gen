import React from 'react';
import { PDFViewer, Page, Document, StyleSheet } from 'react-pdf';
import { InfoColumn } from './Info/InfoColumn';
import { ContentColumn } from './Content/ContentColumn';
import data from '../../../example-json/john_smith.json';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Roboto',
    fontSize: 8,
  },
});

export const FolesTemplate = () => {
  return (
    <PDFViewer className="pdf-viewer">
      <Document>
        <Page size="LETTER" style={styles.page}>
          <InfoColumn data={data} />
          <ContentColumn data={data} />
        </Page>
      </Document>
    </PDFViewer>
  );
};
