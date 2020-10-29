import React from 'react';
import { Text, View, StyleSheet } from 'react-pdf';
import _ from 'lodash';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  'column--content': {
    backgroundColor: 'white',
    padding: '0 12px 0 12px',
    width: '65%',
  },
  'section-content--heading': {
    fontSize: 16,
    margin: '8px 0 0 0',
    padding: '0 0 8px 0',
    fontWeight: 'bold',
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
    margin: '3px 0 8px 0',
  },
  'work-experience-content--tags-item': {
    backgroundColor: '#276a97',
    borderRadius: 8,
    color: 'white',
    fontSize: 8,
    margin: '0 4px 0 0',
    padding: '0 6px',
  },
  'work-experience-content--descriptions-item': {
    margin: '0 0 4px 15px',
    fontSize: 10,
  },
  'project-content--heading': {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 0 5px 0',
  },
  'project-content--subheading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'project-content--project': {
    fontWeight: 'bold',
  },
  'project-content--descriptor': {
    fontSize: '8',
    fontFamily: 'MerriweatherItalic',
    padding: '2px 0 0 0',
  },
  'summary--heading': {
    display: 'flex',
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'summary--description': {
    display: 'flex',
    fontSize: 10,
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

const SummaryHeading = () => {
  return (
    <View>
      <View style={styles['summary--heading']}></View>
    </View>
  );
};
SummaryHeading.propTypes = {
  description: PropTypes.string,
};

const Summary = ({ description }) => {
  return (
    <View>
      <SummaryHeading />
      <View style={styles['summary--description']}>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

Summary.propTypes = {
  description: PropTypes.string,
};

export const ContentColumn = ({ data }) => {
  return (
    <View style={styles['column--content']}>
      <Text style={styles['section-content--heading']}>
        {data.summary.heading}
      </Text>
      <Summary description={data.summary.description} />
      <Text style={styles['section-content--heading']}>
        {data.projects.heading}
      </Text>
      <Projects details={data.projects.details} />
      <Text style={styles['section-content--heading']}>
        {data['work-experience'].heading}
      </Text>
      <WorkExperiences details={data['work-experience'].details} />
    </View>
  );
};

ContentColumn.propTypes = {
  data: PropTypes.shape({
    summary: PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
    }),
    projects: PropTypes.shape({
      details: PropTypes.arrayOf(PropTypes.object),
      heading: PropTypes.string,
    }),
    'work-experience': PropTypes.shape({
      details: PropTypes.arrayOf(PropTypes.object),
      heading: PropTypes.string,
    }),
  }),
};
