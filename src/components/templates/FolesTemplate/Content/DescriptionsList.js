import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from '../Styles';

export const DescriptionsList = ({ descriptions }) => {
  return (
    <View>
      {_.map(descriptions, (description, index) => {
        return (
          <Text key={index} style={styles['description-item']}>
            &#8226; {description}
          </Text>
        );
      })}
    </View>
  );
};

DescriptionsList.propTypes = {
  descriptions: PropTypes.arrayOf(PropTypes.string),
};
