import React from 'react';
import { StyleSheet } from 'react-pdf';
import { InfoColumn } from './Info/InfoColumn';
import { ContentColumn } from './Content/ContentColumn';
import { generatePDFTemplate } from '../BaseTemplate/BaseTemplate';
import data from '../../../example-json/john_smith.json';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Roboto',
    fontSize: 8,
  },
});

const UnwrappedFolesTemplate = () => {
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
