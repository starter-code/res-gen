import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from './info-styles';

export const Links = ({ contactInfo }) => {
  const { github, linkedin, website } = contactInfo;
  return (
    <View>
      <Text style={styles['section-info--heading']}>Links</Text>
      <View style={styles['section--contact-info']}>
        <View style={styles['contact-info--contact-item']}>
          <Text>Github: </Text>
          <Text>{github}</Text>
        </View>
        <View style={styles['contact-info--contact-item']}>
          <Text>LinkedIn: </Text>
          <Text>{linkedin}</Text>
        </View>
        <View style={styles['contact-info--contact-item']}>
          <Text>Website: </Text>
          <Text>{website}</Text>
        </View>
      </View>
    </View>
  );
};

Links.propTypes = {
  contactInfo: PropTypes.object,
};
