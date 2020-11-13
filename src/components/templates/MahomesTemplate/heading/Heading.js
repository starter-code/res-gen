import React from 'react';
import { Text, View } from 'react-pdf';
import PropTypes from 'prop-types';
import { styles } from './heading-style';

export const Heading = ({ name, title }) => {
  return (
    <View style={styles['column-info']}>
      <View style={styles['section--heading-info']}>
        <Text style={styles['heading-name']}>{name}</Text>
        <Text style={styles['heading-title']}>{title}</Text>
      </View>
    </View>
  );
};

Heading.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};
