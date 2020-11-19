import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

export const Links = ({ contactInfo, style }) => {
  const { github, linkedin, website } = contactInfo;
  return (
    <View>
      <Text style={style['info-heading']}>Socials</Text>
      <Text style={style['info-list-item']}>Github: {github}</Text>
      <Text style={style['info-list-item']}>LinkedIn: {linkedin}</Text>
      <Text style={style['info-list-item']}>Website: {website}</Text>
    </View>
  );
};

Links.propTypes = {
  contactInfo: PropTypes.object,
  style: PropTypes.object,
};
