import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

export const Contacts = ({ contactInfo, style }) => {
  const { email, github, linkedin, website } = contactInfo;
  return (
    <View>
      <Text style={style['info-header-content']}>Contact</Text>
      <View style={style['info-section']}>
        <View style={style['contact-item']}>
          <Text>Gmail:</Text>
          <Text>{email}</Text>
        </View>
        <View style={style['contact-item']}>
          <Text>Github:</Text>
          <Text>{github}</Text>
        </View>
        <View style={style['contact-item']}>
          <Text>LinkedIn:</Text>
          <Text>{linkedin}</Text>
        </View>
        <View style={style['contact-item']}>
          <Text>Website:</Text>
          <Text>{website}</Text>
        </View>
      </View>
    </View>
  );
};

Contacts.propTypes = {
  contactInfo: PropTypes.object,
  style: PropTypes.object,
};
