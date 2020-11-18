import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

export const DetailsTags = ({ tags, style }) => {
  return (
    <View style={style['tags-list']}>
      {_.map(tags, (tag, tagIndex) => {
        return (
          <Text key={tagIndex} style={style['tag-item']}>
            {tag}
          </Text>
        );
      })}
    </View>
  );
};

DetailsTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.object,
};
