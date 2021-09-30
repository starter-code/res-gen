import React from 'react';
import { Text, View } from 'react-pdf';
import PropTypes from 'prop-types';

export const Interests = ({ interests, style }) => {
  return (
    <View>
      <Text style={style['section-heading']}>Interests</Text>
      <View style={style['interests']}>
        {interests.map((interest) => {
          return <Text key={interest}>{interest}</Text>;
        })}
      </View>
    </View>
  );
};

Interests.propTypes = {
  interests: PropTypes.array,
  style: PropTypes.object,
};
