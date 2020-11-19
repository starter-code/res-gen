import React from 'react';
import { Text, View } from 'react-pdf';
import _ from 'lodash';
import PropTypes from 'prop-types';

export const DetailsTags = ({ tags, style }) => {
  return (
    <View style={style['work-experience-tags']}>
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
