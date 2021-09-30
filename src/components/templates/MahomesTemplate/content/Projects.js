import React from 'react';
import { Text, View } from 'react-pdf';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { WorkExperienceDescriptions } from './WorkExperience';
import { DetailsTags } from './DetailTags';

const ProjectHeading = ({ project, dates, descriptor, title, style }) => {
  return (
    <View>
      <View style={style['project-heading']}>
        <Text>
          {project} {!!descriptor && '|'}{' '}
        </Text>
        <Text style={style['project-descriptor']}> {descriptor}</Text>
      </View>
      <View style={style['project-subheading']}>
        <Text style={style['project-title']}>{title}</Text>
        <Text>{dates}</Text>
      </View>
    </View>
  );
};

ProjectHeading.propTypes = {
  project: PropTypes.string,
  descriptor: PropTypes.string,
  dates: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

const Project = ({ project, dates, descriptor, descriptions, tags, title, style }) => {
  return (
    <View>
      <ProjectHeading
        project={project}
        descriptor={descriptor}
        dates={dates}
        title={title}
        style={style}
      />
      <DetailsTags tags={tags} style={style} />
      <WorkExperienceDescriptions descriptions={descriptions} style={style} />
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
