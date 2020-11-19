import React from 'react';
import PropTypes from 'prop-types';
import { InfoColumn } from './Info/InfoColumn';
import { ContentColumn } from './Content/ContentColumn';
import { generatePDFTemplate } from '../BaseTemplate/BaseTemplate';

const UnwrappedFolesTemplate = ({ data, style }) => {
  return (
    <React.Fragment>
      <InfoColumn data={data} style={style} />
      <ContentColumn data={data} style={style} />
    </React.Fragment>
  );
};

export const FolesTemplate = generatePDFTemplate({
  Template: UnwrappedFolesTemplate,
  displayName: 'FolesTemplate',
});

UnwrappedFolesTemplate.propTypes = {
  data: PropTypes.object,
  style: PropTypes.object,
};
