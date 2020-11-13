import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from './info-styles';

export const Links = ({ contactInfo }) => {
  const { github, linkedin, website } = contactInfo;
  return (
    <View>
      <Text style={styles['info-heading']}>Links</Text>
      <Text style={styles['list-item']}>Github: {github}</Text>
      <Text style={styles['list-item']}>LinkedIn: {linkedin}</Text>
      <Text style={styles['list-item']}>Website: {website}</Text>
    </View>
  );
};

Links.propTypes = {
  contactInfo: PropTypes.object,
};
