import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from '../Styles';

export const InfoHeader = ({ location, name, title }) => {
  return (
    <View style={styles['info-header']}>
      <Text style={styles['info-header-name']}>{name}</Text>
      <Text style={styles['info-header-title']}>{title}</Text>
      <Text style={styles['info-header-location']}>{location}</Text>
    </View>
  );
};

InfoHeader.propTypes = {
  location: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};
