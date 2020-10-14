import React from 'react';
import { PDFViewer, Page, Document, StyleSheet, View } from 'react-pdf';
import { Heading } from './Heading';
import { InfoColumn } from './InfoColumn';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    fontFamily: 'Roboto',
    fontSize: 12,
  },
  columns: {
    flexDirection: 'row',
  },
});

export const GoogleDoc = () => {
  return (
    <PDFViewer className="pdf-viewer">
      <Document>
        <Page style={styles.page}>
          <Heading />
          <View style={styles.columns}>
            <InfoColumn />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
