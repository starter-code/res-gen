import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { DetailHeading } from './DetailHeading';
import { DescriptionsList } from './DescriptionsList';

const OtherWorkExperience = ({
  company,
  dates,
  descriptions,
  location,
  title,
  style,
}) => {
  return (
    <View>
      <DetailHeading
        company={company}
        dates={dates}
        title={title}
        location={location}
        style={style}
      />
      <DescriptionsList descriptions={descriptions} style={style} />
    </View>
  );
};

OtherWorkExperience.propTypes = {
  company: PropTypes.string,
  dates: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

export const OtherWorkExperiences = ({ details, heading, style }) => {
  return (
    <View>
      <Text style={style['section-heading']}>{heading}</Text>
      {_.map(details, (details, index) => {
        return <OtherWorkExperience {...details} key={index} style={style} />;
      })}
    </View>
  );
};

OtherWorkExperiences.propTypes = {
  details: PropTypes.array,
  heading: PropTypes.string,
  style: PropTypes.object,
};
