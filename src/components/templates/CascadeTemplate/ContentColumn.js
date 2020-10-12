import React from 'react';
import { Text, View, StyleSheet } from 'react-pdf';
import data from '../../../example-json/john_smith.json';
import _ from 'lodash';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  'column--content': {
    backgroundColor: 'white',
    padding: '24px 24px 0 24px',
    width: '65%',
  },
  'section-content--heading': {
    fontSize: 14,
    margin: '8px 0 0 0',
    textAlign: 'center',
    borderBottom: 1,
  },
  'work-experience-content--heading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'work-experience-content--title': {
    fontWeight: 'bold',
  },
  'work-experience-content--tags': {
    display: 'flex',
    flexDirection: 'row',
  },
  'work-experience-content--tags-item': {
    backgroundColor: '#333',
    borderRadius: 8,
    color: 'white',
    fontSize: 10,
    margin: '0 4px 0 0',
    padding: '0 6px',
  },
  'work-experience-content--descriptions-item': {
    margin: '0 0 4px 8px',
  },
  'project-content--heading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const WorkExperienceHeading = ({ company, dates, location, title }) => {
  return (
    <View>
      <View style={styles['work-experience-content--heading']}>
        <Text>
          {company} | {location}
        </Text>
        <Text>{dates}</Text>
      </View>
      <Text style={styles['work-experience-content--title']}>{title}</Text>
    </View>
  );
};

WorkExperienceHeading.propTypes = {
  company: PropTypes.string,
  dates: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
};

const DetailsTags = ({ tags }) => {
  return (
    <View style={styles['work-experience-content--tags']}>
      {_.map(tags, (tag, tagIndex) => {
        return (
          <Text
            key={tagIndex}
            style={styles['work-experience-content--tags-item']}
          >
            {tag}
          </Text>
        );
      })}
    </View>
  );
};

DetailsTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

const WorkExperienceDescriptions = ({ descriptions }) => {
  return (
    <View>
      {_.map(descriptions, (description, index) => {
        return (
          <Text
            key={index}
            style={styles['work-experience-content--descriptions-item']}
          >
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

const WorkExperiences = ({ details }) => {
  return (
    <View>
      {_.map(details, (details, index) => {
        return <WorkExperience {...details} key={index} />;
      })}
    </View>
  );
};

WorkExperiences.propTypes = {
  details: PropTypes.array,
};

const ProjectHeading = ({ name, dates, descriptor, location, title }) => {
  return (
    <View>
      <View style={styles['project-content--heading']}>
        <Text>{name}</Text>
        <Text>{dates}</Text>
      </View>
      <Text>{descriptor}</Text>
      <View style={styles['d-flex']}>
        <Text>{location}</Text>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

ProjectHeading.propTypes = {
  name: PropTypes.string,
  descriptor: PropTypes.string,
  dates: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
};

const Project = ({ name, dates, descriptor, descriptions, tags, title }) => {
  return (
    <View>
      <ProjectHeading
        name={name}
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
  name: PropTypes.string,
  descriptor: PropTypes.string,
  dates: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

const Projects = ({ details }) => {
  return (
    <View>
      {_.map(details, (details, index) => {
        return <Project {...details} key={index} />;
      })}
    </View>
  );
};

Projects.propTypes = {
  details: PropTypes.array,
};

export const ContentColumn = () => {
  return (
    <View style={styles['column--content']}>
      <Text style={styles['section-content--heading']}>
        {data['work-experience'].heading}
      </Text>
      <WorkExperiences details={data['work-experience'].details} />
      <Text style={styles['section-content--heading']}>
        {data.projects.heading}
      </Text>
      <Projects details={data.projects.details} />
    </View>
  );
};
