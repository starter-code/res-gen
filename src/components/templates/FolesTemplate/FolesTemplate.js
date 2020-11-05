import React from 'react';
import { StyleSheet } from 'react-pdf';
import { InfoColumn } from './Info/InfoColumn';
import { ContentColumn } from './Content/ContentColumn';
import { generatePDFTemplate } from '../BaseTemplate/BaseTemplate';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Roboto',
    fontSize: 8,
  },
});

const UnwrappedFolesTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <InfoColumn data={data} />
      <ContentColumn data={data} />
    </React.Fragment>
  );
};

export const FolesTemplate = generatePDFTemplate({
  Template: UnwrappedFolesTemplate,
  styles,
  displayName: 'FolesTemplate',
});

UnwrappedFolesTemplate.propTypes = {
  count: PropTypes.number,
  data: PropTypes.object,
};
