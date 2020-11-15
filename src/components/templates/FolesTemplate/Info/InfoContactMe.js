import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from '../Styles';

export const Contacts = ({ contactInfo }) => {
  const { email, github, linkedin, website } = contactInfo;
  return (
    <View>
      <Text style={styles['info-content-header']}>Contact</Text>
      <View style={styles['info-section']}>
        <View style={styles['contact-item']}>
          <Text>Gmail:</Text>
          <Text>{email}</Text>
        </View>
        <View style={styles['contact-item']}>
          <Text>Github:</Text>
          <Text>{github}</Text>
        </View>
        <View style={styles['contact-item']}>
          <Text>LinkedIn:</Text>
          <Text>{linkedin}</Text>
        </View>
        <View style={styles['contact-item']}>
          <Text>Website:</Text>
          <Text>{website}</Text>
        </View>
      </View>
    </View>
  );
};

Contacts.propTypes = {
  contactInfo: PropTypes.object,
};
