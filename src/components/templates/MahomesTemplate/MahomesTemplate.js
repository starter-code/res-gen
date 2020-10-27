import React from 'react';
import { PDFViewer, Page, Document, StyleSheet, View } from 'react-pdf';
import { Content } from './Content';
import { Heading } from './Heading';
import { InfoColumn } from './InfoColumn';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    fontFamily: 'Merriweather',
    fontSize: 12,
  },
  columns: {
    flexDirection: 'row',
    height: '100%',
  },
});

export const Mahomes = () => {
  return (
    <PDFViewer className="pdf-viewer">
      <Document>
        <Page style={styles.page}>
          <Heading />
          <View style={styles.columns}>
            <Content />
            <InfoColumn />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
