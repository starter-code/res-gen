import React from 'react';
import { Text, View } from 'react-pdf';

import PropTypes from 'prop-types';

const SummaryHeading = () => {
  return (
    <View>
      <View style={['summary--heading']}></View>
    </View>
  );
};
SummaryHeading.propTypes = {
  description: PropTypes.string,
};

export const Summary = ({ description }) => {
  return (
    <View>
      <SummaryHeading />
      <View style={['summary--description']}>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

Summary.propTypes = {
  description: PropTypes.string,
};
