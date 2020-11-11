import React from 'react';
import { Text, View } from 'react-pdf';

import PropTypes from 'prop-types';
import { styles } from './content-styles';

export const WorkExperienceHeading = ({ company, dates, location, title }) => {
  return (
    <View>
      <View style={styles['work-experience-content--heading']}>
        <Text>
          {company} | {location}
        </Text>
        <Text>{dates}</Text>
      </View>
      <Text style={styles['work-experience-content--title']}>{title}</Text>
    </View>
  );
};

WorkExperienceHeading.propTypes = {
  company: PropTypes.string,
  dates: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
};
