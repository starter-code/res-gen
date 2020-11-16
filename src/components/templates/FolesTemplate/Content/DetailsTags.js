import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from '../Styles';

export const DetailsTags = ({ tags }) => {
  return (
    <View style={styles['tags-list']}>
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
