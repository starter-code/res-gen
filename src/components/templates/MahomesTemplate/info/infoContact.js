import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from './info-styles';

export const Contacts = ({ email, location }) => {
  return (
    <View>
      <Text style={styles['info-heading']}>Contact</Text>
      <Text style={styles['list-item']}>{email}</Text>
      <Text style={styles['list-item']}>{location}</Text>
    </View>
  );
};

Contacts.propTypes = {
  email: PropTypes.string,
  location: PropTypes.string,
};