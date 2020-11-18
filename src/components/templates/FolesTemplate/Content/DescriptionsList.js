import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

export const DescriptionsList = ({ descriptions, style }) => {
  return (
    <View>
      {_.map(descriptions, (description, index) => {
        return (
          <Text key={index} style={style['description-item']}>
            &#8226; {description}
          </Text>
        );
      })}
    </View>
  );
};

DescriptionsList.propTypes = {
  descriptions: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.object,
};
