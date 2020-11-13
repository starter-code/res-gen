import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-pdf';
import { InfoColumn } from './Info/InfoColumn';
import { ContentColumn } from './Content/ContentColumn';
import { generatePDFTemplate } from '../BaseTemplate/BaseTemplate';

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
  data: PropTypes.object,
};
