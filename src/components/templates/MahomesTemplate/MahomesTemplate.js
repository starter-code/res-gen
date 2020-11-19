import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-pdf';
import { generatePDFTemplate } from '../BaseTemplate/BaseTemplate';
import { ContentColumn } from './content/ContentColumn';
import { Heading } from './heading/Heading';
import { InfoColumn } from './info/InfoColumn';

const UnwrappedMahomesTemplate = ({ data, style }) => {
  const {
    heading: { name, title },
  } = data;

  return (
    <React.Fragment>
      <Heading name={name} title={title} style={style} />
      <View style={style.columns}>
        <ContentColumn data={data} style={style} />
        <InfoColumn data={data} style={style} />
      </View>
    </React.Fragment>
  );
};

UnwrappedMahomesTemplate.propTypes = {
  data: PropTypes.object,
  style: PropTypes.object,
};

export const MahomesTemplate = generatePDFTemplate({
  Template: UnwrappedMahomesTemplate,
  displayName: 'MahomesTemplate',
});
