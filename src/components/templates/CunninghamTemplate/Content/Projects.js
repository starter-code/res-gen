import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';

import { DetailsHeading } from './DetailsHeading';
import { DetailsTags } from './DetailsTags';
import { DescriptionsList } from './DescriptionsList';

const Project = ({ dates, descriptions, descriptor, location, project, tags, title, style }) => {
  return (
    <View>
      <DetailsHeading
        project={project}
        descriptor={descriptor}
        location={location}
        dates={dates}
        title={title}
        style={style}
      />
      <DetailsTags tags={tags} style={style} />
      <DescriptionsList descriptions={descriptions} style={style} />
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
  style: PropTypes.object,
};

export const Projects = ({ details, heading, style }) => {
  return (
    <View>
      <Text style={style['section-heading']}>{heading}</Text>
      {_.map(details, (details, index) => {
        return <Project {...details} key={index} style={style} />;
      })}
    </View>
  );
};

Projects.propTypes = {
  details: PropTypes.array,
  heading: PropTypes.string,
  style: PropTypes.object,
};
