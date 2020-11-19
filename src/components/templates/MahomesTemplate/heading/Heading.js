import React from 'react';
import { Text, View } from 'react-pdf';
import PropTypes from 'prop-types';

export const Heading = ({ name, title, style }) => {
  return (
    <View style={style['heading-info']}>
      <Text style={style['heading-name']}>{name}</Text>
      <Text style={style['heading-title']}>{title}</Text>
    </View>
  );
};

Heading.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};
