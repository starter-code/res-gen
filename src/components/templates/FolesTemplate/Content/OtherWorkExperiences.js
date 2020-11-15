import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from '../Styles';
import { DetailHeading } from './DetailHeading';
import { DescriptionsList } from './DescriptionsList';

const OtherWorkExperience = ({
  company,
  dates,
  descriptions,
  location,
  title,
}) => {
  return (
    <View>
      <DetailHeading
        company={company}
        dates={dates}
        title={title}
        location={location}
      />
      <DescriptionsList descriptions={descriptions} />
    </View>
  );
};

OtherWorkExperience.propTypes = {
  company: PropTypes.string,
  dates: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  title: PropTypes.string,
};

export const OtherWorkExperiences = ({ details, heading }) => {
  return (
    <View>
      <Text style={styles['section-heading']}>{heading}</Text>
      {_.map(details, (details, index) => {
        return <OtherWorkExperience {...details} key={index} />;
      })}
    </View>
  );
};

OtherWorkExperiences.propTypes = {
  details: PropTypes.array,
  heading: PropTypes.string,
};
