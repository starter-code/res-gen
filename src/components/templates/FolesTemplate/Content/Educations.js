import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';
import { DetailHeading } from './DetailHeading';
import { DescriptionsList } from './DescriptionsList';

const Education = ({ dates, descriptions, location, school, style }) => {
  return (
    <View>
      <DetailHeading dates={dates} location={location} school={school} style={style} />
      <DescriptionsList descriptions={descriptions} style={style} />
    </View>
  );
};

Education.propTypes = {
  dates: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  school: PropTypes.string,
  style: PropTypes.object,
};

export const Educations = ({ details, heading, style }) => {
  return (
    <View>
      <Text style={style['section-heading']}>{heading}</Text>
      {_.map(details, (details, index) => {
        return <Education {...details} key={index} style={style} />;
      })}
    </View>
  );
};

Educations.propTypes = {
  details: PropTypes.array,
  heading: PropTypes.string,
  style: PropTypes.object,
};
