import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

export const InfoHeader = ({ location, name, title, style }) => {
  return (
    <View style={style['info-header']}>
      <Text style={style['info-header-name']}>{name}</Text>
      <Text style={style['info-header-title']}>{title}</Text>
      <Text style={style['info-header-location']}>{location}</Text>
    </View>
  );
};

InfoHeader.propTypes = {
  location: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};
