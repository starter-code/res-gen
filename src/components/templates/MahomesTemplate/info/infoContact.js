import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

export const Contacts = ({ email, location, style }) => {
  return (
    <View>
      <Text style={style['info-heading']}>Contact</Text>
      <Text style={style['info-list-item']}>{email}</Text>
      <Text style={style['info-list-item']}>{location}</Text>
    </View>
  );
};

Contacts.propTypes = {
  email: PropTypes.string,
  location: PropTypes.string,
  style: PropTypes.object,
};
