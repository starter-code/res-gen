import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-pdf';
import { generatePDFTemplate } from '../BaseTemplate/BaseTemplate';
import { ContentColumn } from './content/ContentColumn';
import { Heading } from './Heading';
import { InfoColumn } from './info/InfoColumn';

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

const UnwrappedMahomesTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <Heading data={data} />
      <View style={styles.columns}>
        <ContentColumn data={data} />
        <InfoColumn data={data} />
      </View>
    </React.Fragment>
  );
};

UnwrappedMahomesTemplate.propTypes = {
  data: PropTypes.object,
};

export const MahomesTemplate = generatePDFTemplate({
  Template: UnwrappedMahomesTemplate,
  styles,
  displayName: 'MahomesTemplate',
});
