import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from './info-styles';

export const InfoSubSection = ({ data, heading }) => {
  return (
    <View>
      <Text style={styles['info-sub-section-header']}>{heading}</Text>
      <View style={styles['info-sub-section']}>
        {_.map(data, (text, index) => {
          return (
            <Text style={styles['info-sub-section-item']} key={index}>
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
};
