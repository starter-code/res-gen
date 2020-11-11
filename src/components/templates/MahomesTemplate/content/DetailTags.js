import React from 'react';
import { Text, View } from 'react-pdf';
import _ from 'lodash';
import PropTypes from 'prop-types';

export const DetailsTags = ({ tags }) => {
  return (
    <View style={['work-experience-content--tags']}>
      {_.map(tags, (tag, tagIndex) => {
        return (
          <Text key={tagIndex} style={['work-experience-content--tags-item']}>
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
