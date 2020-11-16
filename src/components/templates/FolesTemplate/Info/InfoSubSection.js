import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from '../Styles';

export const InfoSubSection = ({ data, heading }) => {
  return (
    <View>
      <Text style={styles['info-header-content']}>{heading}</Text>
      <View style={styles['info-section']}>
        {_.map(data, (text, index) => {
          return (
            <Text style={styles['info-item']} key={index}>
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
