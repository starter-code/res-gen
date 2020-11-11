import React from 'react';
import { Text, View } from 'react-pdf';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { WorkExperienceDescriptions } from './WorkExperience';
import { DetailsTags } from './DetailTags';
import { styles } from './content-styles';

const ProjectHeading = ({ project, dates, descriptor, title }) => {
  return (
    <View>
      <View style={styles['project-content--heading']}>
        <Text style={styles['project-content--project']}>
          {project} {!!descriptor && '--'}{' '}
        </Text>
        <Text style={styles['project-content--descriptor']}> {descriptor}</Text>
      </View>
      <View style={styles['project-content--subheading']}>
        <Text>{title}</Text>
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
};

const Project = ({ project, dates, descriptor, descriptions, tags, title }) => {
  return (
    <View>
      <ProjectHeading
        project={project}
        descriptor={descriptor}
        dates={dates}
        title={title}
      />
      <DetailsTags tags={tags} />
      <WorkExperienceDescriptions descriptions={descriptions} />
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
  console.log(details);
  return (
    <View>
      <Text style={styles['section-content--heading']}>{heading}</Text>
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
