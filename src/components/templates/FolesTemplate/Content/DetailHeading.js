import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

export const DetailHeading = ({
  company,
  dates,
  location,
  project,
  title,
  school,
  style,
}) => {
  return (
    <View>
      <View style={style['detail-heading']}>
        <Text>
          {project || company || school} {location && '|'} {location}
        </Text>
        <Text>{dates}</Text>
      </View>
      <Text style={style['detail-title']}>{title}</Text>
    </View>
  );
};

DetailHeading.propTypes = {
  company: PropTypes.string,
  dates: PropTypes.string,
  location: PropTypes.string,
  project: PropTypes.string,
  title: PropTypes.string,
  school: PropTypes.string,
  style: PropTypes.object,
};
