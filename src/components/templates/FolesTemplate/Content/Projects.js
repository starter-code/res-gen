import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { styles } from './content-styles';
import { DetailHeading } from './DetailHeading';
import { DetailsTags } from './DetailsTags';
import { DescriptionsList } from './DescriptionsList';

const Project = ({
  dates,
  descriptions,
  descriptor,
  location,
  project,
  tags,
  title,
}) => {
  return (
    <View>
      <DetailHeading
        project={project}
        descriptor={descriptor}
        location={location}
        dates={dates}
        title={title}
      />
      <DetailsTags tags={tags} />
      <DescriptionsList descriptions={descriptions} />
    </View>
  );
};

Project.propTypes = {
  project: PropTypes.string,
  descriptor: PropTypes.string,
  dates: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export const Projects = ({ details, heading }) => {
  return (
    <View>
      <Text style={styles['section-heading']}>{heading}</Text>
      {_.map(details, (details, index) => {
        return <Project {...details} key={index} />;
      })}
    </View>
  );
};

Projects.propTypes = {
  details: PropTypes.array,
  heading: PropTypes.string,
};
