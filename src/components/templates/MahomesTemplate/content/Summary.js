import React from 'react';
import { Text, View } from 'react-pdf';

import PropTypes from 'prop-types';
import { styles } from '../Styles';

export const Summary = ({ description, heading }) => {
  return (
    <View>
      <View style={styles['summary-heading']}>
        <Text style={styles['section-heading']}>{heading}</Text>
      </View>
      <View style={styles['summary-description']}>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

Summary.propTypes = {
  description: PropTypes.string,
  heading: PropTypes.string,
};
