import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

export const InfoSubSection = ({ data, heading, style }) => {
  return (
    <View>
      <Text style={style['info-header-content']}>{heading}</Text>
      <View style={style['info-section']}>
        {_.map(data, (text, index) => {
          return (
            <Text style={style['info-item']} key={index}>
              {text}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

InfoSubSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string,
  style: PropTypes.object,
};
