import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from './info-styles';

export const Contacts = ({ contactInfo, location }) => {
  const { email } = contactInfo;
  return (
    <View>
      <Text style={styles['section-info--heading']}>Contact</Text>
      <View style={styles['heading--location-item']}>
        <Text>{email}</Text>
        <Text>{location}</Text>
      </View>
    </View>
  );
};

Contacts.propTypes = {
  contactInfo: PropTypes.object,
  location: PropTypes.string,
};
