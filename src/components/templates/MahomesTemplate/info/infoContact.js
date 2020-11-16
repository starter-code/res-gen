import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from '../Styles';

export const Contacts = ({ email, location }) => {
  return (
    <View>
      <Text style={styles['info-heading']}>Contact</Text>
      <Text style={styles['info-list-item']}>{email}</Text>
      <Text style={styles['info-list-item']}>{location}</Text>
    </View>
  );
};

Contacts.propTypes = {
  email: PropTypes.string,
  location: PropTypes.string,
};
