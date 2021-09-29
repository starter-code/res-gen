import React from 'react';
import { Text, View } from 'react-pdf';
import PropTypes from 'prop-types';

export const WorkExperienceHeading = ({ company, dates, location, title, style }) => {
  return (
    <View>
      <View style={style['work-experience-heading']}>
        <Text>
          {company} | {location}
        </Text>
        <Text>{dates}</Text>
      </View>
      <Text style={style['work-experience-title']}>{title}</Text>
    </View>
  );
};

WorkExperienceHeading.propTypes = {
  company: PropTypes.string,
  dates: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};
