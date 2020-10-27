import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from './content-styles';
import { DetailHeading } from './DetailHeading';
import { DescriptionsList } from './DescriptionsList';

const Education = ({ dates, descriptions, location, school }) => {
  return (
    <View>
      <DetailHeading dates={dates} location={location} school={school} />
      <DescriptionsList descriptions={descriptions} />
    </View>
  );
};

Education.propTypes = {
  dates: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  school: PropTypes.string,
};

export const Educations = ({ details, heading }) => {
  return (
    <View>
      <Text style={styles['section-heading']}>{heading}</Text>
      {_.map(details, (details, index) => {
        return <Education {...details} key={index} />;
      })}
    </View>
  );
};

Educations.propTypes = {
  details: PropTypes.array,
  heading: PropTypes.string,
};
