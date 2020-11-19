import React from 'react';
import { Text, View } from 'react-pdf';
import PropTypes from 'prop-types';

export const Summary = ({ description, heading, style }) => {
  return (
    <View>
      <View style={style['summary-heading']}>
        <Text style={style['section-heading']}>{heading}</Text>
      </View>
      <View style={style['summary-description']}>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

Summary.propTypes = {
  description: PropTypes.string,
  heading: PropTypes.string,
  style: PropTypes.object,
};
