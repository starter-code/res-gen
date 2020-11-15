import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from '../Styles';
import { DetailHeading } from './DetailHeading';
import { DetailsTags } from './DetailsTags';
import { DescriptionsList } from './DescriptionsList';

const WorkExperience = ({
  company,
  dates,
  descriptions,
  location,
  tags,
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
      <DetailsTags tags={tags} />
      <DescriptionsList descriptions={descriptions} />
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
};

export const WorkExperiences = ({ details, heading }) => {
  return (
    <View>
      <Text style={styles['section-heading']}>{heading}</Text>
      {_.map(details, (details, index) => {
        return <WorkExperience {...details} key={index} />;
      })}
    </View>
  );
};

WorkExperiences.propTypes = {
  details: PropTypes.array,
  heading: PropTypes.string,
};
