import React from 'react';
import { Text, View } from 'react-pdf';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { WorkExperienceHeading } from './WorkExperienceHeading';
import { DetailsTags } from './DetailTags';
import { styles } from '../Styles';

export const WorkExperienceDescriptions = ({ descriptions }) => {
  return (
    <View>
      {_.map(descriptions, (description, index) => {
        return (
          <Text key={index} style={styles['work-experience-description']}>
            &#8226; {description}
          </Text>
        );
      })}
    </View>
  );
};

WorkExperienceDescriptions.propTypes = {
  descriptions: PropTypes.arrayOf(PropTypes.string),
};

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
      <WorkExperienceHeading
        company={company}
        dates={dates}
        title={title}
        location={location}
      />
      <DetailsTags tags={tags} />
      <WorkExperienceDescriptions descriptions={descriptions} />
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
