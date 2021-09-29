import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { DetailHeading } from './DetailHeading';
import { DetailsTags } from './DetailsTags';
import { DescriptionsList } from './DescriptionsList';

const WorkExperience = ({ company, dates, descriptions, location, tags, title, style }) => {
  return (
    <View>
      <DetailHeading
        company={company}
        dates={dates}
        title={title}
        location={location}
        style={style}
      />
      <DetailsTags tags={tags} style={style} />
      <DescriptionsList descriptions={descriptions} style={style} />
    </View>
  );
};

WorkExperience.propTypes = {
  company: PropTypes.string,
  dates: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  style: PropTypes.object,
};

export const WorkExperiences = ({ details, heading, style }) => {
  return (
    <View>
      <Text style={style['section-heading']}>{heading}</Text>
      {_.map(details, (details, index) => {
        return <WorkExperience {...details} key={index} style={style} />;
      })}
    </View>
  );
};

WorkExperiences.propTypes = {
  details: PropTypes.array,
  heading: PropTypes.string,
  style: PropTypes.object,
};
