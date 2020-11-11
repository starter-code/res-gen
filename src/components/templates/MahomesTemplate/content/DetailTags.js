import React from 'react';
import { Text, View } from 'react-pdf';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { styles } from './content-styles';

export const DetailsTags = ({ tags }) => {
  return (
    <View style={styles['work-experience-content--tags']}>
      {_.map(tags, (tag, tagIndex) => {
        return (
          <Text
            key={tagIndex}
            style={styles['work-experience-content--tags-item']}
          >
            {tag}
          </Text>
        );
      })}
    </View>
  );
};

DetailsTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
