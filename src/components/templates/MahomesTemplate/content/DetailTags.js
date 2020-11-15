import React from 'react';
import { Text, View } from 'react-pdf';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { styles } from '../Styles';

export const DetailsTags = ({ tags }) => {
  return (
    <View style={styles['work-experience-tags']}>
      {_.map(tags, (tag, tagIndex) => {
        return (
          <Text key={tagIndex} style={styles['tag-item']}>
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
