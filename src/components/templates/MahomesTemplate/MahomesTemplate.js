import React from 'react';
import { StyleSheet, View } from 'react-pdf';
import { generatePDFTemplate } from '../BaseTemplate/BaseTemplate';
import { ContentColumn } from './ContentColumn';
import { Heading } from './Heading';
import { InfoColumn } from '../MahomesTemplate/info/InfoColumn';
import data from '../../../example-json/john_smith.json';

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

const UnwrappedMahomesTemplate = () => {
  return (
    <React.Fragment>
      <Heading />
      <View style={styles.columns}>
        <ContentColumn data={data} />
        <InfoColumn data={data} />
      </View>
    </React.Fragment>
  );
};

export const MahomesTemplate = generatePDFTemplate({
  Template: UnwrappedMahomesTemplate,
  styles,
  displayName: 'MahomesTemplate',
});
