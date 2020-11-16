import React from 'react';
import { Text, View } from 'react-pdf';
import PropTypes from 'prop-types';
import { styles } from '../Styles';

export const Heading = ({ name, title }) => {
  return (
    <View style={styles['heading-info']}>
      <Text style={styles['heading-name']}>{name}</Text>
      <Text style={styles['heading-title']}>{title}</Text>
    </View>
  );
};

Heading.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};
