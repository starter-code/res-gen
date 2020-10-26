import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from './content-styles';

export const DetailHeading = ({
  company,
  dates,
  location,
  project,
  title,
  school,
}) => {
  return (
    <View>
      <View style={styles['detail-heading']}>
        <Text>
          {project || company || school} {location && '|'} {location}
        </Text>
        <Text>{dates}</Text>
      </View>
      <Text style={styles['detail-title']}>{title}</Text>
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
};
