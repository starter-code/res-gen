import React from 'react';
import PropTypes from 'prop-types';
import { ContentColumn } from './Content/ContentColumn';
import { generatePDFTemplate } from '../BaseTemplate/BaseTemplate';

const UnwrappedCunninghamTemplate = ({ data, style }) => {
  return (
    <React.Fragment>
      <ContentColumn data={data} style={style} />
    </React.Fragment>
  );
};

export const CunninghamTemplate = generatePDFTemplate({
  Template: UnwrappedCunninghamTemplate,
  displayName: 'CunninghamTemplate',
});

UnwrappedCunninghamTemplate.propTypes = {
  data: PropTypes.object,
  style: PropTypes.object,
};
