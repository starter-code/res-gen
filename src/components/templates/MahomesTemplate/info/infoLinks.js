import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from '../Styles';

export const Links = ({ contactInfo }) => {
  const { github, linkedin, website } = contactInfo;
  return (
    <View>
      <Text style={styles['info-heading']}>Socials</Text>
      <Text style={styles['info-list-item']}>Github: {github}</Text>
      <Text style={styles['info-list-item']}>LinkedIn: {linkedin}</Text>
      <Text style={styles['info-list-item']}>Website: {website}</Text>
    </View>
  );
};

Links.propTypes = {
  contactInfo: PropTypes.object,
};
